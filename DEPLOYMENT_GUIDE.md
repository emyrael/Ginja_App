# 🚀 Ginja App Deployment Guide

This guide covers the complete development to production workflow for your Ginja App.

## 📋 **Quick Reference**

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `./test_local.sh dev` | Start development server | When coding and testing changes |
| `./test_local.sh build` | Build app locally | Before deploying |
| `./deploy_staging.sh staging` | Deploy to staging | Test before production |
| `./deploy_production.sh deploy` | Deploy to production | When ready to go live |
| `./deploy.sh full` | Complete workflow | Recommended approach |
| `./deploy.sh quick` | Quick production deploy | Emergency updates |

## 🔄 **Complete Workflow**

### **Step 1: Development & Testing**

#### **1.1 Start Development Server**
```bash
cd /home/emyraeleson/app
./test_local.sh dev
```
- Opens development server at `http://localhost:3000`
- Hot reload enabled for real-time changes
- Press `Ctrl+C` to stop

#### **1.2 Test Your Changes**
- Make your code changes
- Test functionality in the browser
- Check for any errors in the console

#### **1.3 Build and Test Locally**
```bash
./test_local.sh build
```
- Builds production version
- Tests the build locally
- Ensures no build errors

### **Step 2: Staging Deployment (Recommended)**

#### **2.1 Deploy to Staging**
```bash
./deploy_staging.sh staging
```
- Builds your app
- Deploys to staging environment
- Starts test server at `http://localhost:8080`

#### **2.2 Test Staging Deployment**
- Visit `http://localhost:8080`
- Test all functionality
- Verify everything works as expected
- Check mobile responsiveness

#### **2.3 Deploy to Production**
```bash
./deploy_production.sh deploy
```
- Deploys staging to production
- Zero-downtime deployment
- Your app goes live at `https://ginjaapp.com`

### **Step 3: Verification**

#### **3.1 Check Production Status**
```bash
./deploy.sh status
```
- Shows service status
- Displays deployment information
- Checks if everything is running

#### **3.2 Verify Live Site**
- Visit `https://ginjaapp.com`
- Test all features
- Check SSL certificate
- Verify mobile experience

## 🚀 **Quick Deployment Options**

### **Option 1: Complete Workflow (Recommended)**
```bash
./deploy.sh full
```
This runs the complete process:
1. Builds your app
2. Deploys to staging
3. Waits for your confirmation
4. Deploys to production

### **Option 2: Quick Deploy (Skip Staging)**
```bash
./deploy.sh quick
```
⚠️ **Use with caution** - skips staging testing

### **Option 3: Step-by-Step**
```bash
# 1. Test locally
./test_local.sh dev

# 2. Build
./test_local.sh build

# 3. Deploy to staging
./deploy_staging.sh staging

# 4. Test staging (visit http://localhost:8080)

# 5. Deploy to production
./deploy_production.sh deploy
```

## 🛠️ **Development Commands**

### **Local Development**
```bash
# Start development server
./test_local.sh dev

# Build application
./test_local.sh build

# Test production build locally
./test_local.sh test

# Run code quality checks
./test_local.sh check
```

### **Staging Commands**
```bash
# Deploy to staging
./deploy_staging.sh staging

# Deploy staging to production
./deploy_staging.sh production

# Show staging status
./deploy_staging.sh status

# Rollback staging
./deploy_staging.sh rollback
```

### **Production Commands**
```bash
# Deploy to production
./deploy_production.sh deploy

# Verify deployment
./deploy_production.sh verify

# Show production status
./deploy_production.sh status

# Emergency rollback
./deploy_production.sh rollback
```

## 🔧 **Service Management**

### **Check Service Status**
```bash
# Check all services
./deploy.sh status

# Check specific service
sudo systemctl status ginja.service
sudo systemctl status ginja-monitor.service
sudo systemctl status nginx
```

### **Restart Services**
```bash
# Restart all services
sudo systemctl restart ginja.service ginja-monitor.service nginx

# Restart specific service
sudo systemctl restart ginja-monitor.service
```

### **View Logs**
```bash
# View service logs
sudo journalctl -u ginja-monitor.service -f
sudo journalctl -u nginx -f

# View health check logs
tail -f /var/log/ginja-health.log
```

## 🚨 **Emergency Procedures**

### **If Production is Down**
```bash
# 1. Check status
./deploy.sh status

# 2. Emergency rollback
./deploy.sh rollback

# 3. Restart services
sudo systemctl restart ginja.service ginja-monitor.service nginx
```

### **If Staging is Broken**
```bash
# Redeploy staging
./deploy_staging.sh staging
```

### **If Build Fails**
```bash
# Check for errors
./test_local.sh build

# Clean and rebuild
cd frontend
rm -rf .next out node_modules
npm install
npm run build
```

## 📁 **File Structure**

```
/home/emyraeleson/app/
├── deploy.sh                 # Master deployment script
├── test_local.sh            # Local development testing
├── deploy_staging.sh        # Staging deployment
├── deploy_production.sh     # Production deployment
├── health_check.sh          # Health monitoring
├── frontend/                # Your Next.js app
│   ├── pages/
│   ├── components/
│   └── ...
├── /var/www/ginjaapp.com/   # Production files
├── /var/www/ginjaapp.com.staging/  # Staging files
└── /var/www/ginjaapp.com.backup/   # Backup files
```

## 🔍 **Troubleshooting**

### **Common Issues**

#### **1. Build Fails**
```bash
# Check for errors
./test_local.sh build

# Clean and reinstall
cd frontend
rm -rf node_modules .next out
npm install
npm run build
```

#### **2. App Not Accessible**
```bash
# Check services
./deploy.sh status

# Restart services
sudo systemctl restart ginja.service ginja-monitor.service nginx

# Check health
./health_check.sh
```

#### **3. SSL Issues**
```bash
# Check SSL status
sudo certbot certificates

# Renew SSL
sudo certbot renew

# Test SSL
curl -I https://ginjaapp.com
```

#### **4. DNS Issues**
```bash
# Check DNS
dig ginjaapp.com +short

# Should show: 34.56.152.192
```

### **Debug Commands**
```bash
# Check Nginx configuration
sudo nginx -t

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check system logs
sudo journalctl -u ginja-monitor.service -f

# Test app locally
curl -H "Host: ginjaapp.com" http://localhost/
```

## 📊 **Monitoring**

### **Health Check**
```bash
# Run health check
./health_check.sh

# Fix issues automatically
./health_check.sh --fix

# View health logs
./health_check.sh --log
```

### **Service Monitoring**
The `ginja-monitor.service` automatically:
- Monitors Nginx status
- Checks app accessibility
- Redeploys if files are missing
- Restarts services if needed

## 🎯 **Best Practices**

### **Before Deploying**
1. ✅ Test locally with `./test_local.sh dev`
2. ✅ Build successfully with `./test_local.sh build`
3. ✅ Test staging deployment
4. ✅ Verify all features work
5. ✅ Check mobile responsiveness

### **During Deployment**
1. ✅ Use staging first (recommended)
2. ✅ Monitor deployment logs
3. ✅ Test immediately after deployment
4. ✅ Have rollback plan ready

### **After Deployment**
1. ✅ Verify production site
2. ✅ Check SSL certificate
3. ✅ Test all functionality
4. ✅ Monitor for issues

## 🆘 **Support**

If you encounter issues:

1. **Check the logs**: `./deploy.sh status`
2. **Run health check**: `./health_check.sh`
3. **Check service status**: `sudo systemctl status ginja-monitor.service`
4. **Emergency rollback**: `./deploy.sh rollback`

## 📝 **Quick Commands Summary**

```bash
# Development
./test_local.sh dev          # Start dev server
./test_local.sh build        # Build app

# Staging
./deploy_staging.sh staging  # Deploy to staging
# Test at http://localhost:8080

# Production
./deploy_production.sh deploy # Deploy to production
# Live at https://ginjaapp.com

# Complete workflow
./deploy.sh full             # Full workflow
./deploy.sh quick            # Quick deploy
./deploy.sh status           # Check status
./deploy.sh rollback         # Emergency rollback
```

---

**Remember**: Always test in staging before production! 🚀
