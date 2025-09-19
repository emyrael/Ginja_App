#!/bin/bash

# Local Development Testing Script
# This script helps you test your changes locally before deploying to production

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[LOCAL TEST]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[DEV TEST]${NC} $1"
}

# Configuration
FRONTEND_DIR="/home/emyraeleson/app/frontend"
TEST_PORT=3000

# Function to check if port is available
check_port() {
    if lsof -Pi :$TEST_PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
        print_warning "Port $TEST_PORT is already in use"
        print_status "Killing existing process on port $TEST_PORT..."
        lsof -ti:$TEST_PORT | xargs kill -9 2>/dev/null || true
        sleep 2
    fi
}

# Function to install dependencies
install_deps() {
    print_header "Installing dependencies..."
    cd "$FRONTEND_DIR"
    
    if [ ! -d "node_modules" ]; then
        print_status "Installing npm dependencies..."
        npm install
    else
        print_status "Dependencies already installed"
    fi
}

# Function to build the app
build_app() {
    print_header "Building application..."
    cd "$FRONTEND_DIR"
    
    # Clean previous build
    rm -rf .next out
    
    # Build the application
    print_status "Running npm build..."
    npm run build
    
    if [ ! -d "out" ]; then
        print_error "Build failed - 'out' directory not found"
        exit 1
    fi
    
    print_status "Build completed successfully"
}

# Function to start development server
start_dev_server() {
    print_header "Starting development server..."
    cd "$FRONTEND_DIR"
    
    check_port
    
    print_status "Starting Next.js development server on port $TEST_PORT..."
    print_status "Your app will be available at: http://localhost:$TEST_PORT"
    print_status "Press Ctrl+C to stop the server"
    
    # Start the development server
    npm run dev -- --port $TEST_PORT
}

# Function to test production build locally
test_production_build() {
    print_header "Testing production build locally..."
    
    build_app
    
    # Create a temporary test directory
    TEST_DIR="/tmp/ginja-test-$(date +%s)"
    mkdir -p "$TEST_DIR"
    
    # Copy built files
    cp -r "$FRONTEND_DIR/out"/* "$TEST_DIR/"
    
    # Start a simple HTTP server
    print_status "Starting test server on port $TEST_PORT..."
    print_status "Your production build will be available at: http://localhost:$TEST_PORT"
    print_status "Press Ctrl+C to stop the server"
    
    cd "$TEST_DIR"
    python3 -m http.server $TEST_PORT
}

# Function to run linting and tests
run_checks() {
    print_header "Running code quality checks..."
    cd "$FRONTEND_DIR"
    
    # Run linting
    print_status "Running ESLint..."
    if npm run lint 2>/dev/null; then
        print_status "✅ Linting passed"
    else
        print_warning "⚠️ Linting issues found (non-blocking)"
    fi
    
    # Check for TypeScript errors
    print_status "Checking TypeScript..."
    if npx tsc --noEmit 2>/dev/null; then
        print_status "✅ TypeScript check passed"
    else
        print_warning "⚠️ TypeScript issues found (non-blocking)"
    fi
}

# Main function
main() {
    print_header "Starting local development testing..."
    
    case "${1:-dev}" in
        "dev")
            install_deps
            run_checks
            start_dev_server
            ;;
        "build")
            install_deps
            run_checks
            build_app
            print_status "✅ Build completed successfully"
            ;;
        "test")
            install_deps
            run_checks
            test_production_build
            ;;
        "check")
            run_checks
            ;;
        "help"|"--help"|"-h")
            echo "Ginja App Local Testing Script"
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  dev     Start development server (default)"
            echo "  build   Build the application"
            echo "  test    Test production build locally"
            echo "  check   Run code quality checks only"
            echo "  help    Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 dev     # Start dev server"
            echo "  $0 build   # Build for production"
            echo "  $0 test    # Test production build"
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
