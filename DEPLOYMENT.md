# Ginja App Deployment Guide

This guide covers the production deployment setup for the Ginja App on Ubuntu GCP VM with Nginx and SSL.

## 🚀 Quick Start

### 1. Deploy Your App
```bash
cd /home/emyraeleson/app
./deploy_ginja.sh
```

### 2. Set Up SSL (After DNS is configured)
```bash
./setup_ssl.sh
```

## 📁 File Structure

```
/home/emyraeleson/app/
├── deploy_ginja.sh          # Main deployment script
├── setup_ssl.sh            # SSL certificate setup
├── frontend/               # Next.js frontend application
│   ├── out/               # Static build output
│   └── ...
└── DEPLOYMENT.md           # This file

/var/www/ginjaapp.com/      # Web server document root
/etc/nginx/sites-available/ginjaapp.com  # Nginx configuration
/etc/systemd/system/ginja.service        # Systemd service
```

## 🔧 Services

### Nginx Configuration
- **Location**: `/etc/nginx/sites-available/ginjaapp.com`
- **Features**:
  - SPA routing with `try_files $uri $uri/ /index.html`
  - www → non-www redirect
  - HTTP → HTTPS redirect (when SSL is configured)
  - Gzip compression
  - Security headers
  - Static asset caching

### Systemd Service
- **Service**: `ginja.service`
- **Commands**:
  ```bash
  sudo systemctl start ginja
  sudo systemctl stop ginja
  sudo systemctl restart ginja
  sudo systemctl status ginja
  ```

### SSL Certificates
- **Provider**: Let's Encrypt (via Certbot)
- **Auto-renewal**: Enabled via systemd timer
- **Domains**: `ginjaapp.com`, `www.ginjaapp.com`

## 📋 Deployment Scripts

### `deploy_ginja.sh`
Main deployment script that:
1. Creates backup of current deployment
2. Builds the Next.js frontend
3. Copies files to web directory
4. Tests Nginx configuration
5. Reloads services
6. Renews SSL certificates (if configured)
7. Verifies deployment

**Usage**:
```bash
./deploy_ginja.sh              # Full deployment
./deploy_ginja.sh --no-backup  # Skip backup
./deploy_ginja.sh --no-ssl     # Skip SSL renewal
./deploy_ginja.sh --help       # Show help
```

### `setup_ssl.sh`
SSL certificate setup script that:
1. Checks domain DNS configuration
2. Cleans up Certbot issues
3. Issues SSL certificates
4. Updates Nginx for HTTPS
5. Tests SSL setup

**Usage**:
```bash
./setup_ssl.sh                 # Full SSL setup
./setup_ssl.sh --check-only    # Only check domain
./setup_ssl.sh --force         # Force certificate renewal
./setup_ssl.sh --help          # Show help
```

## 🌐 Domain Configuration

Before setting up SSL, ensure your domain DNS is configured:

1. **A Record**: `ginjaapp.com` → Your server's public IP
2. **CNAME Record**: `www.ginjaapp.com` → `ginjaapp.com`

You can find your server's public IP with:
```bash
curl ifconfig.me
```

## 🔒 SSL Setup Process

1. **Prerequisites**:
   - Domain DNS pointing to server IP
   - Ports 80 and 443 open in firewall
   - Nginx running and serving the site

2. **Run SSL Setup**:
   ```bash
   ./setup_ssl.sh
   ```

3. **Verify SSL**:
   - Visit `https://ginjaapp.com`
   - Check certificate validity
   - Test www redirect

## 🛠️ Troubleshooting

### Common Issues

1. **SSL Certificate Issues**:
   ```bash
   sudo certbot certificates
   sudo certbot renew --dry-run
   ```

2. **Nginx Configuration**:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

3. **Domain Not Resolving**:
   ```bash
   dig ginjaapp.com
   nslookup ginjaapp.com
   ```

4. **Service Issues**:
   ```bash
   sudo systemctl status ginja
   sudo journalctl -u ginja -f
   ```

### Logs
- **Nginx**: `/var/log/nginx/error.log`
- **Certbot**: `/var/log/letsencrypt/letsencrypt.log`
- **System**: `sudo journalctl -u ginja -f`

## 🔄 Maintenance

### Regular Tasks
1. **Deploy Updates**:
   ```bash
   ./deploy_ginja.sh
   ```

2. **Check SSL Expiry**:
   ```bash
   sudo certbot certificates
   ```

3. **Monitor Services**:
   ```bash
   sudo systemctl status nginx ginja
   ```

### Backup
- Web files are automatically backed up to `/var/www/ginjaapp.com.backup` before each deployment
- SSL certificates are stored in `/etc/letsencrypt/live/ginjaapp.com/`

## 📞 Support

If you encounter issues:
1. Check the logs mentioned above
2. Verify domain DNS configuration
3. Ensure firewall allows ports 80 and 443
4. Test Nginx configuration with `sudo nginx -t`

---

**Note**: This setup is configured for `ginjaapp.com` and `www.ginjaapp.com`. Update domain names in the configuration files if using different domains.
