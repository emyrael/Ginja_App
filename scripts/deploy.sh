#!/bin/bash

# Ginja Landing Page Deployment Script
echo "🚀 Deploying Ginja Landing Page..."

# Build the application
echo "🏗️  Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "Deployment options:"
    echo "1. Vercel: vercel --prod"
    echo "2. Netlify: Upload 'out' folder to Netlify"
    echo "3. Custom server: Upload 'out' folder to your hosting provider"
    echo ""
    echo "🇳🇬 Ready to go live! 🚀"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
