#!/bin/bash

# Master Deployment Workflow Script
# This script provides a complete development to production workflow

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[DEPLOY]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[MASTER DEPLOY]${NC} $1"
}

print_step() {
    echo -e "${PURPLE}[STEP]${NC} $1"
}

# Function to show banner
show_banner() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                    GINJA APP DEPLOYMENT                     ║"
    echo "║                   Master Workflow Script                    ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Function to show workflow
show_workflow() {
    echo -e "${BLUE}Complete Development Workflow:${NC}"
    echo ""
    echo "1. ${GREEN}Development${NC}:"
    echo "   ./test_local.sh dev     # Start development server"
    echo "   ./test_local.sh build   # Build and test locally"
    echo ""
    echo "2. ${YELLOW}Staging${NC}:"
    echo "   ./deploy_staging.sh staging  # Deploy to staging"
    echo "   # Test at http://localhost:8080"
    echo ""
    echo "3. ${RED}Production${NC}:"
    echo "   ./deploy_production.sh deploy  # Deploy to production"
    echo "   # Live at https://ginjaapp.com"
    echo ""
    echo "4. ${PURPLE}Maintenance${NC}:"
    echo "   ./deploy_production.sh status   # Check status"
    echo "   ./deploy_production.sh rollback # Emergency rollback"
    echo ""
}

# Function to run full workflow
run_full_workflow() {
    print_header "Running complete development to production workflow..."
    
    print_step "Step 1: Building application"
    ./test_local.sh build
    
    print_step "Step 2: Deploying to staging"
    ./deploy_staging.sh staging
    
    print_step "Step 3: Testing staging deployment"
    echo "Please test your staging deployment at http://localhost:8080"
    echo "Press Enter when you're satisfied with the staging deployment..."
    read -r
    
    print_step "Step 4: Deploying to production"
    ./deploy_production.sh deploy
    
    print_status "🎉 Full workflow completed successfully!"
    print_status "Your app is now live at https://ginjaapp.com"
}

# Function to quick deploy (skip staging)
quick_deploy() {
    print_header "Quick deployment to production..."
    print_warning "This skips staging testing - use with caution!"
    
    print_step "Building and deploying directly to production"
    ./deploy_production.sh deploy
    
    print_status "🚀 Quick deployment completed!"
    print_status "Your app is now live at https://ginjaapp.com"
}

# Function to show status
show_status() {
    print_header "Current deployment status..."
    
    echo "Services:"
    sudo systemctl status ginja.service --no-pager -l
    echo ""
    sudo systemctl status ginja-monitor.service --no-pager -l
    echo ""
    sudo systemctl status nginx --no-pager -l
    echo ""
    
    echo "Deployment status:"
    ./deploy_production.sh status
}

# Function to emergency rollback
emergency_rollback() {
    print_header "Emergency rollback..."
    print_warning "This will rollback to the previous version immediately!"
    
    echo "Are you sure you want to rollback? (yes/no)"
    read -r response
    
    if [ "$response" = "yes" ]; then
        ./deploy_production.sh rollback
        print_status "✅ Emergency rollback completed"
    else
        print_status "Rollback cancelled"
    fi
}

# Function to show help
show_help() {
    show_banner
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  ${GREEN}dev${NC}         Start development server"
    echo "  ${GREEN}build${NC}       Build application locally"
    echo "  ${YELLOW}staging${NC}      Deploy to staging for testing"
    echo "  ${RED}production${NC}    Deploy to production"
    echo "  ${PURPLE}full${NC}         Complete workflow (dev → staging → production)"
    echo "  ${PURPLE}quick${NC}        Quick deploy (skip staging)"
    echo "  ${BLUE}status${NC}       Show current status"
    echo "  ${RED}rollback${NC}      Emergency rollback"
    echo "  ${BLUE}workflow${NC}     Show complete workflow"
    echo "  ${BLUE}help${NC}         Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 dev         # Start development server"
    echo "  $0 full        # Complete workflow"
    echo "  $0 quick       # Quick production deploy"
    echo "  $0 status      # Check status"
    echo ""
}

# Main function
main() {
    case "${1:-help}" in
        "dev")
            ./test_local.sh dev
            ;;
        "build")
            ./test_local.sh build
            ;;
        "staging")
            ./deploy_staging.sh deploy
            ;;
        "production")
            ./deploy_production.sh deploy
            ;;
        "full")
            run_full_workflow
            ;;
        "quick")
            quick_deploy
            ;;
        "status")
            show_status
            ;;
        "rollback")
            emergency_rollback
            ;;
        "workflow")
            show_workflow
            ;;
        "help"|"--help"|"-h")
            show_help
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
