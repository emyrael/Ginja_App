#!/bin/bash

# Ginja App Health Check Script
# This script monitors the health of your Ginja App

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[HEALTH]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Configuration
WEB_DIR="/var/www/ginjaapp.com"
APP_DIR="/home/emyraeleson/app"
LOG_FILE="/var/log/ginja-health.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Check if Nginx is running
check_nginx() {
    if systemctl is-active --quiet nginx; then
        print_status "Nginx is running"
        return 0
    else
        print_error "Nginx is not running"
        log_message "Nginx is not running"
        return 1
    fi
}

# Check if files exist
check_files() {
    if [ -f "$WEB_DIR/index.html" ]; then
        print_status "App files exist"
        return 0
    else
        print_error "App files missing"
        log_message "App files missing"
        return 1
    fi
}

# Check if app is accessible
check_app_accessibility() {
    if curl -f -s -H "Host: ginjaapp.com" http://localhost/ > /dev/null 2>&1; then
        print_status "App is accessible"
        return 0
    else
        print_error "App is not accessible"
        log_message "App is not accessible"
        return 1
    fi
}

# Check SSL certificate
check_ssl() {
    if [ -f "/etc/letsencrypt/live/ginjaapp.com/fullchain.pem" ]; then
        print_status "SSL certificate exists"
        return 0
    else
        print_warning "SSL certificate missing"
        log_message "SSL certificate missing"
        return 1
    fi
}

# Fix issues
fix_issues() {
    print_warning "Attempting to fix issues..."
    
    # Restart Nginx
    if ! check_nginx; then
        print_status "Restarting Nginx..."
        sudo systemctl restart nginx
        sleep 5
    fi
    
    # Redeploy if files are missing
    if ! check_files; then
        print_status "Redeploying app..."
        cd "$APP_DIR" && ./deploy_ginja.sh --no-backup
    fi
    
    # Test again
    sleep 10
    if check_app_accessibility; then
        print_status "Issues fixed successfully"
        log_message "Issues fixed successfully"
        return 0
    else
        print_error "Failed to fix issues"
        log_message "Failed to fix issues"
        return 1
    fi
}

# Main health check function
main() {
    print_status "Starting health check..."
    log_message "Health check started"
    
    local issues=0
    
    # Run all checks
    check_nginx || ((issues++))
    check_files || ((issues++))
    check_app_accessibility || ((issues++))
    check_ssl || ((issues++))
    
    if [ $issues -eq 0 ]; then
        print_status "All systems healthy ✅"
        log_message "All systems healthy"
        return 0
    else
        print_warning "Found $issues issues"
        log_message "Found $issues issues"
        
        # Try to fix issues
        if fix_issues; then
            print_status "Health check completed successfully"
            return 0
        else
            print_error "Health check failed"
            log_message "Health check failed"
            return 1
        fi
    fi
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        echo "Ginja App Health Check Script"
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --help, -h     Show this help message"
        echo "  --fix          Attempt to fix issues automatically"
        echo "  --log          Show recent log entries"
        echo ""
        exit 0
        ;;
    --fix)
        fix_issues
        ;;
    --log)
        echo "Recent health check logs:"
        tail -20 "$LOG_FILE" 2>/dev/null || echo "No logs found"
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
