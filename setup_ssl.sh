#!/bin/bash

# SSL Setup Script for Ginja App
# This script sets up SSL certificates for ginjaapp.com and www.ginjaapp.com

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[SSL SETUP]${NC} $1"
}

# Check if domain is pointing to this server
check_domain() {
    print_header "Checking domain configuration..."
    
    # Get server's public IP
    SERVER_IP=$(curl -s ifconfig.me)
    print_status "Server IP: $SERVER_IP"
    
    # Check domain DNS
    DOMAIN_IP=$(dig +short ginjaapp.com | tail -n1)
    if [ -z "$DOMAIN_IP" ]; then
        print_error "Domain ginjaapp.com is not resolving to any IP"
        print_warning "Please ensure your domain DNS is pointing to this server's IP: $SERVER_IP"
        return 1
    fi
    
    print_status "Domain ginjaapp.com resolves to: $DOMAIN_IP"
    
    if [ "$DOMAIN_IP" != "$SERVER_IP" ]; then
        print_error "Domain IP ($DOMAIN_IP) does not match server IP ($SERVER_IP)"
        print_warning "Please update your DNS records to point ginjaapp.com to $SERVER_IP"
        return 1
    fi
    
    print_status "✓ Domain is correctly configured"
    return 0
}

# Clean up any existing Let's Encrypt account issues
cleanup_certbot() {
    print_header "Cleaning up Certbot configuration..."
    
    # Remove any problematic account files
    sudo rm -rf /var/lib/letsencrypt/accounts/*
    sudo rm -rf /etc/letsencrypt/accounts/*
    
    print_status "Certbot configuration cleaned up"
}

# Issue SSL certificates
issue_certificates() {
    print_header "Issuing SSL certificates..."
    
    # Issue certificates for both domains
    sudo certbot certonly \
        --nginx \
        --non-interactive \
        --agree-tos \
        --email emyraeleson@gmail.com \
        --domains ginjaapp.com,www.ginjaapp.com \
        --force-renewal
    
    if [ $? -eq 0 ]; then
        print_status "✓ SSL certificates issued successfully"
    else
        print_error "Failed to issue SSL certificates"
        return 1
    fi
}

# Update Nginx configuration for HTTPS
update_nginx_ssl() {
    print_header "Updating Nginx configuration for HTTPS..."
    
    # Create HTTPS configuration
    sudo tee /etc/nginx/sites-available/ginjaapp.com > /dev/null << 'EOF'
# Redirect www to non-www (HTTP)
server {
    listen 80;
    listen [::]:80;
    server_name www.ginjaapp.com;
    return 301 http://ginjaapp.com$request_uri;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name ginjaapp.com;
    return 301 https://ginjaapp.com$request_uri;
}

# Redirect www HTTPS to non-www HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.ginjaapp.com;
    
    ssl_certificate /etc/letsencrypt/live/ginjaapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ginjaapp.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    return 301 https://ginjaapp.com$request_uri;
}

# Main HTTPS site configuration
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name ginjaapp.com;
    root /var/www/ginjaapp.com;
    index index.html;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/ginjaapp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ginjaapp.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;

    # Handle static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security - deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
EOF

    # Test configuration
    if sudo nginx -t; then
        print_status "✓ Nginx configuration is valid"
    else
        print_error "Nginx configuration test failed"
        return 1
    fi
    
    # Reload Nginx
    sudo systemctl reload nginx
    print_status "✓ Nginx reloaded with HTTPS configuration"
}

# Test SSL setup
test_ssl() {
    print_header "Testing SSL setup..."
    
    # Test HTTP redirect
    HTTP_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://ginjaapp.com)
    if [ "$HTTP_RESPONSE" = "301" ]; then
        print_status "✓ HTTP redirect working"
    else
        print_warning "HTTP redirect may not be working (got $HTTP_RESPONSE)"
    fi
    
    # Test HTTPS
    HTTPS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://ginjaapp.com)
    if [ "$HTTPS_RESPONSE" = "200" ]; then
        print_status "✓ HTTPS working"
    else
        print_warning "HTTPS may not be working (got $HTTPS_RESPONSE)"
    fi
    
    # Test www redirect
    WWW_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://www.ginjaapp.com)
    if [ "$WWW_RESPONSE" = "301" ]; then
        print_status "✓ www redirect working"
    else
        print_warning "www redirect may not be working (got $WWW_RESPONSE)"
    fi
}

# Main SSL setup function
main() {
    print_header "Starting SSL setup for ginjaapp.com..."
    
    if ! check_domain; then
        print_error "Domain configuration check failed. Please fix DNS settings first."
        exit 1
    fi
    
    cleanup_certbot
    issue_certificates
    update_nginx_ssl
    test_ssl
    
    print_status "🎉 SSL setup completed successfully!"
    print_status "Your site is now available at:"
    print_status "  - https://ginjaapp.com"
    print_status "  - https://www.ginjaapp.com (redirects to ginjaapp.com)"
    print_status "  - http://ginjaapp.com (redirects to HTTPS)"
    print_status "  - http://www.ginjaapp.com (redirects to HTTPS)"
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        echo "SSL Setup Script for Ginja App"
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --help, -h     Show this help message"
        echo "  --check-only   Only check domain configuration"
        echo "  --force        Force certificate renewal"
        echo ""
        exit 0
        ;;
    --check-only)
        check_domain
        ;;
    --force)
        issue_certificates() {
            print_header "Force renewing SSL certificates..."
            sudo certbot renew --force-renewal
            print_status "✓ SSL certificates force renewed"
        }
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
