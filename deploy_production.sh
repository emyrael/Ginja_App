#!/bin/bash

# Production Deployment Script
# This script safely deploys changes to production with zero downtime

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[PRODUCTION]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[PROD DEPLOY]${NC} $1"
}

# Configuration
FRONTEND_DIR="/home/emyraeleson/app/frontend"
WEB_DIR="/var/www/ginjaapp.com"
BACKUP_DIR="/var/www/ginjaapp.com.backup"
TEMP_DIR="/tmp/ginja-deploy-$(date +%s)"

# Function to create backup
create_backup() {
    print_header "Creating backup of current production..."
    
    if [ -d "$WEB_DIR" ] && [ -f "$WEB_DIR/index.html" ]; then
        sudo rm -rf "$BACKUP_DIR"
        sudo cp -r "$WEB_DIR" "$BACKUP_DIR"
        print_status "✅ Backup created at $BACKUP_DIR"
    else
        print_warning "No current production to backup"
    fi
}

# Function to build application
build_app() {
    print_header "Building application..."
    
    cd "$FRONTEND_DIR"
    
    # Clean previous builds
    rm -rf .next out
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm install
    fi
    
    # Build the application
    print_status "Running production build..."
    npm run build
    
    if [ ! -d "out" ]; then
        print_error "Build failed - 'out' directory not found"
        exit 1
    fi
    
    print_status "✅ Build completed successfully"
}

# Function to prepare deployment
prepare_deployment() {
    print_header "Preparing deployment..."
    
    # Create temporary directory
    mkdir -p "$TEMP_DIR"
    
    # Copy built files to temp directory
    cp -r "$FRONTEND_DIR/out"/* "$TEMP_DIR/"
    
    # Set proper permissions
    chmod -R 755 "$TEMP_DIR"
    
    print_status "✅ Deployment prepared in $TEMP_DIR"
}

# Function to deploy with zero downtime
deploy_zero_downtime() {
    print_header "Deploying with zero downtime..."
    
    # Create atomic deployment
    print_status "Performing atomic deployment..."
    
    # Move current production to temp backup
    if [ -d "$WEB_DIR" ]; then
        sudo mv "$WEB_DIR" "${WEB_DIR}.old"
    fi
    
    # Move new files to production
    sudo mv "$TEMP_DIR" "$WEB_DIR"
    
    # Set proper ownership and permissions
    sudo chown -R www-data:www-data "$WEB_DIR"
    sudo chmod -R 755 "$WEB_DIR"
    
    # Test the new deployment
    print_status "Testing new deployment..."
    sleep 2
    
    if curl -f -s -H "Host: ginjaapp.com" http://localhost/ > /dev/null; then
        print_status "✅ New deployment is working"
        
        # Remove old backup
        sudo rm -rf "${WEB_DIR}.old"
        
        # Reload Nginx
        sudo systemctl reload nginx
        
        print_status "✅ Zero-downtime deployment completed"
    else
        print_error "❌ New deployment failed, rolling back..."
        
        # Rollback
        sudo rm -rf "$WEB_DIR"
        sudo mv "${WEB_DIR}.old" "$WEB_DIR"
        sudo systemctl reload nginx
        
        print_error "❌ Rolled back to previous version"
        exit 1
    fi
}

# Function to verify deployment
verify_deployment() {
    print_header "Verifying deployment..."
    
    # Check if files exist
    if [ -f "$WEB_DIR/index.html" ]; then
        print_status "✅ index.html found"
    else
        print_error "❌ index.html not found"
        return 1
    fi
    
    # Check if app is accessible
    if curl -f -s -H "Host: ginjaapp.com" http://localhost/ > /dev/null; then
        print_status "✅ App is accessible"
    else
        print_error "❌ App is not accessible"
        return 1
    fi
    
    # Check Nginx status
    if sudo systemctl is-active --quiet nginx; then
        print_status "✅ Nginx is running"
    else
        print_error "❌ Nginx is not running"
        return 1
    fi
    
    # Check SSL
    if curl -f -s https://ginjaapp.com > /dev/null; then
        print_status "✅ HTTPS is working"
    else
        print_warning "⚠️ HTTPS may have issues"
    fi
    
    print_status "🎉 Deployment verification completed successfully!"
}

# Function to cleanup
cleanup() {
    print_header "Cleaning up..."
    
    # Remove temporary directory if it exists
    if [ -d "$TEMP_DIR" ]; then
        rm -rf "$TEMP_DIR"
        print_status "✅ Temporary files cleaned up"
    fi
    
    # Restart monitoring service
    sudo systemctl restart ginja-monitor.service
    print_status "✅ Monitoring service restarted"
}

# Function to show deployment status
show_status() {
    print_header "Deployment Status"
    
    echo "Production URL: https://ginjaapp.com"
    echo "Backup Location: $BACKUP_DIR"
    echo ""
    
    # Check current status
    if curl -f -s https://ginjaapp.com > /dev/null; then
        print_status "✅ Production is live and accessible"
    else
        print_error "❌ Production is not accessible"
    fi
    
    # Show recent deployments
    echo ""
    echo "Recent deployments:"
    ls -la "$BACKUP_DIR" 2>/dev/null | head -5 || echo "No backups found"
}

# Function to rollback
rollback() {
    print_header "Rolling back to previous version..."
    
    if [ -d "$BACKUP_DIR" ]; then
        print_status "Restoring from backup..."
        
        # Create current backup before rollback
        sudo rm -rf "${WEB_DIR}.current"
        sudo cp -r "$WEB_DIR" "${WEB_DIR}.current"
        
        # Restore from backup
        sudo rm -rf "$WEB_DIR"/*
        sudo cp -r "$BACKUP_DIR"/* "$WEB_DIR/"
        sudo chown -R www-data:www-data "$WEB_DIR"
        sudo chmod -R 755 "$WEB_DIR"
        
        # Reload services
        sudo systemctl reload nginx
        sudo systemctl restart ginja-monitor.service
        
        print_status "✅ Rollback completed"
    else
        print_error "No backup found for rollback"
        exit 1
    fi
}

# Main function
main() {
    case "${1:-deploy}" in
        "deploy")
            create_backup
            build_app
            prepare_deployment
            deploy_zero_downtime
            verify_deployment
            cleanup
            ;;
        "build")
            build_app
            ;;
        "verify")
            verify_deployment
            ;;
        "rollback")
            rollback
            ;;
        "status")
            show_status
            ;;
        "help"|"--help"|"-h")
            echo "Ginja App Production Deployment Script"
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  deploy      Full production deployment (default)"
            echo "  build       Build application only"
            echo "  verify      Verify current deployment"
            echo "  rollback    Rollback to previous version"
            echo "  status      Show deployment status"
            echo "  help        Show this help message"
            echo ""
            echo "Workflow:"
            echo "  1. Make changes to your code"
            echo "  2. Test locally: ./test_local.sh dev"
            echo "  3. Deploy to production: $0 deploy"
            echo "  4. Verify: $0 verify"
            echo ""
            exit 0
            ;;
        *)
            print_error "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function
main "$@"
