#!/bin/bash

# Ginja App Deployment Script
# This script builds the frontend, copies files to web directory, and reloads services

set -e  # Exit on any error

echo "🚀 Starting Ginja App deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
FRONTEND_DIR="/home/emyraeleson/app/frontend"
WEB_DIR="/var/www/ginjaapp.com"
BACKUP_DIR="/var/www/ginjaapp.com.backup"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root for certain operations
check_permissions() {
    if [[ $EUID -eq 0 ]]; then
        print_warning "Running as root. Some operations may need adjustment."
    fi
}

# Backup current deployment
backup_current() {
    print_status "Creating backup of current deployment..."
    if [ -d "$WEB_DIR" ]; then
        sudo rm -rf "$BACKUP_DIR"
        sudo cp -r "$WEB_DIR" "$BACKUP_DIR"
        print_status "Backup created at $BACKUP_DIR"
    fi
}

# Build the frontend
build_frontend() {
    print_status "Building frontend application..."
    cd "$FRONTEND_DIR"
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_status "Installing npm dependencies..."
        npm install
    fi
    
    # Build the application
    print_status "Running npm build..."
    npm run build
    
    if [ ! -d "out" ]; then
        print_error "Build failed - 'out' directory not found"
        exit 1
    fi
    
    print_status "Frontend build completed successfully"
}

# Deploy files to web directory
deploy_files() {
    print_status "Deploying files to web directory..."
    
    # Clear web directory
    sudo rm -rf "$WEB_DIR"/*
    
    # Copy new files
    sudo cp -r "$FRONTEND_DIR/out"/* "$WEB_DIR/"
    
    # Set proper permissions
    sudo chown -R www-data:www-data "$WEB_DIR"
    sudo chmod -R 755 "$WEB_DIR"
    
    print_status "Files deployed successfully"
}

# Test Nginx configuration
test_nginx() {
    print_status "Testing Nginx configuration..."
    if sudo nginx -t; then
        print_status "Nginx configuration is valid"
    else
        print_error "Nginx configuration test failed"
        exit 1
    fi
}

# Reload services
reload_services() {
    print_status "Reloading services..."
    
    # Reload Nginx
    sudo systemctl reload nginx
    print_status "Nginx reloaded"
    
    # Restart ginja service
    sudo systemctl restart ginja
    print_status "Ginja service restarted"
}

# Renew SSL certificates
renew_certificates() {
    print_status "Checking SSL certificate renewal..."
    
    # Check if certificates exist
    if [ -f "/etc/letsencrypt/live/ginjaapp.com/fullchain.pem" ]; then
        print_status "Renewing SSL certificates..."
        sudo certbot renew --quiet
        print_status "SSL certificates renewed"
    else
        print_warning "SSL certificates not found. Run SSL setup manually."
    fi
}

# Verify deployment
verify_deployment() {
    print_status "Verifying deployment..."
    
    # Check if files exist
    if [ -f "$WEB_DIR/index.html" ]; then
        print_status "✓ index.html found"
    else
        print_error "✗ index.html not found"
        exit 1
    fi
    
    # Check Nginx status
    if sudo systemctl is-active --quiet nginx; then
        print_status "✓ Nginx is running"
    else
        print_error "✗ Nginx is not running"
        exit 1
    fi
    
    # Check ginja service status
    if sudo systemctl is-active --quiet ginja; then
        print_status "✓ Ginja service is running"
    else
        print_error "✗ Ginja service is not running"
        exit 1
    fi
}

# Main deployment function
main() {
    print_status "Starting deployment process..."
    
    check_permissions
    backup_current
    build_frontend
    deploy_files
    test_nginx
    reload_services
    renew_certificates
    verify_deployment
    
    print_status "🎉 Deployment completed successfully!"
    print_status "Your app should now be available at:"
    print_status "  - http://ginjaapp.com"
    print_status "  - http://www.ginjaapp.com"
    print_status "  - https://ginjaapp.com (if SSL is configured)"
    print_status "  - https://www.ginjaapp.com (if SSL is configured)"
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        echo "Ginja App Deployment Script"
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --help, -h     Show this help message"
        echo "  --no-backup    Skip backup creation"
        echo "  --no-ssl       Skip SSL certificate renewal"
        echo ""
        exit 0
        ;;
    --no-backup)
        backup_current() { print_status "Skipping backup creation..."; }
        main
        ;;
    --no-ssl)
        renew_certificates() { print_status "Skipping SSL certificate renewal..."; }
        main
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown option: $1"
        echo "Use --help for usage information"
        exit 1
        ;;
esac
