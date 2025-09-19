#!/bin/bash

# Staging Deployment Script
# This script deploys to a staging environment for safe testing before production

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[STAGING]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[STAGING DEPLOY]${NC} $1"
}

# Configuration
FRONTEND_DIR="/home/emyraeleson/app/frontend"
STAGING_DIR="/var/www/ginjaapp.com.staging"
WEB_DIR="/var/www/ginjaapp.com"
BACKUP_DIR="/var/www/ginjaapp.com.backup"
STAGING_PORT=8080

# Function to create staging directory
setup_staging() {
    print_header "Setting up staging environment..."
    
    # Create staging directory
    sudo mkdir -p "$STAGING_DIR"
    sudo chown -R $USER:$USER "$STAGING_DIR"
    
    print_status "Staging directory created: $STAGING_DIR"
}

# Function to build and deploy to staging
deploy_to_staging() {
    print_header "Building and deploying to staging..."
    
    # Build the application
    cd "$FRONTEND_DIR"
    print_status "Building application..."
    npm run build
    
    if [ ! -d "out" ]; then
        print_error "Build failed - 'out' directory not found"
        exit 1
    fi
    
    # Copy to staging
    print_status "Copying files to staging directory..."
    rm -rf "$STAGING_DIR"/*
    cp -r "$FRONTEND_DIR/out"/* "$STAGING_DIR/"
    
    # Set permissions
    sudo chown -R www-data:www-data "$STAGING_DIR"
    sudo chmod -R 755 "$STAGING_DIR"
    
    print_status "Staging deployment completed"
}

# Function to test staging deployment
test_staging() {
    print_header "Testing staging deployment..."
    
    # Start a test server on staging directory
    print_status "Starting test server on port $STAGING_PORT..."
    print_status "Staging URL: http://localhost:$STAGING_PORT"
    
    # Kill any existing process on the port
    lsof -ti:$STAGING_PORT | xargs kill -9 2>/dev/null || true
    
    # Start test server in background
    cd "$STAGING_DIR"
    python3 -m http.server $STAGING_PORT &
    TEST_PID=$!
    
    # Wait a moment for server to start
    sleep 3
    
    # Test the staging deployment
    print_status "Testing staging deployment..."
    if curl -f -s "http://localhost:$STAGING_PORT" > /dev/null; then
        print_status "✅ Staging deployment is working"
        
        # Show some content
        print_status "Sample content from staging:"
        curl -s "http://localhost:$STAGING_PORT" | head -5
        
        print_status "Staging is ready for testing!"
        print_status "Visit: http://localhost:$STAGING_PORT"
        print_status "Press Enter to continue to production deployment..."
        read -r
        
    else
        print_error "❌ Staging deployment failed"
        kill $TEST_PID 2>/dev/null || true
        exit 1
    fi
    
    # Clean up test server
    kill $TEST_PID 2>/dev/null || true
}

# Function to deploy to production
deploy_to_production() {
    print_header "Deploying to production..."
    
    # Create backup of current production
    print_status "Creating backup of current production..."
    sudo rm -rf "$BACKUP_DIR"
    sudo cp -r "$WEB_DIR" "$BACKUP_DIR"
    
    # Deploy staging to production
    print_status "Deploying staging to production..."
    sudo rm -rf "$WEB_DIR"/*
    sudo cp -r "$STAGING_DIR"/* "$WEB_DIR/"
    
    # Set permissions
    sudo chown -R www-data:www-data "$WEB_DIR"
    sudo chmod -R 755 "$WEB_DIR"
    
    # Test production
    print_status "Testing production deployment..."
    if curl -f -s -H "Host: ginjaapp.com" http://localhost/ > /dev/null; then
        print_status "✅ Production deployment successful"
    else
        print_error "❌ Production deployment failed, rolling back..."
        rollback
        exit 1
    fi
    
    # Restart services
    print_status "Restarting services..."
    sudo systemctl reload nginx
    sudo systemctl restart ginja-monitor.service
    
    print_status "🎉 Production deployment completed successfully!"
}

# Function to rollback
rollback() {
    print_header "Rolling back to previous version..."
    
    if [ -d "$BACKUP_DIR" ]; then
        print_status "Restoring from backup..."
        sudo rm -rf "$WEB_DIR"/*
        sudo cp -r "$BACKUP_DIR"/* "$WEB_DIR/"
        sudo chown -R www-data:www-data "$WEB_DIR"
        sudo chmod -R 755 "$WEB_DIR"
        
        sudo systemctl reload nginx
        print_status "✅ Rollback completed"
    else
        print_error "No backup found for rollback"
        exit 1
    fi
}

# Function to show status
show_status() {
    print_header "Current deployment status..."
    
    echo "Production:"
    if [ -d "$WEB_DIR" ] && [ -f "$WEB_DIR/index.html" ]; then
        print_status "✅ Production is deployed"
        echo "  - Files: $(ls -1 "$WEB_DIR" | wc -l) files"
        echo "  - Size: $(du -sh "$WEB_DIR" | cut -f1)"
    else
        print_error "❌ Production not deployed"
    fi
    
    echo ""
    echo "Staging:"
    if [ -d "$STAGING_DIR" ] && [ -f "$STAGING_DIR/index.html" ]; then
        print_status "✅ Staging is ready"
        echo "  - Files: $(ls -1 "$STAGING_DIR" | wc -l) files"
        echo "  - Size: $(du -sh "$STAGING_DIR" | cut -f1)"
    else
        print_warning "⚠️ No staging deployment"
    fi
    
    echo ""
    echo "Backup:"
    if [ -d "$BACKUP_DIR" ]; then
        print_status "✅ Backup available"
        echo "  - Files: $(ls -1 "$BACKUP_DIR" | wc -l) files"
        echo "  - Size: $(du -sh "$BACKUP_DIR" | cut -f1)"
    else
        print_warning "⚠️ No backup available"
    fi
}

# Main function
main() {
    case "${1:-deploy}" in
        "deploy")
            setup_staging
            deploy_to_staging
            test_staging
            deploy_to_production
            ;;
        "staging")
            setup_staging
            deploy_to_staging
            test_staging
            ;;
        "production")
            deploy_to_production
            ;;
        "rollback")
            rollback
            ;;
        "status")
            show_status
            ;;
        "help"|"--help"|"-h")
            echo "Ginja App Staging Deployment Script"
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  deploy      Full deployment: staging → test → production (default)"
            echo "  staging     Deploy to staging only"
            echo "  production  Deploy staging to production (skip testing)"
            echo "  rollback    Rollback to previous version"
            echo "  status      Show current deployment status"
            echo "  help        Show this help message"
            echo ""
            echo "Workflow:"
            echo "  1. Make changes to your code"
            echo "  2. Test locally: ./test_local.sh dev"
            echo "  3. Deploy to staging: $0 staging"
            echo "  4. Test staging: Visit http://localhost:8080"
            echo "  5. Deploy to production: $0 production"
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
