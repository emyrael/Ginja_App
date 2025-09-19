#!/bin/bash

# Ginja Frontend Setup Script
echo "🚀 Setting up Ginja Frontend..."

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    echo "❌ frontend/package.json not found. Please run this from the app root directory."
    exit 1
fi

# Navigate to frontend directory
cd frontend

echo "📦 Installing Node.js dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Set up your Supabase credentials in .env.local"
    echo "2. Run 'npm run dev' to start the development server"
    echo "3. Open http://localhost:3000 to view your landing page"
    echo ""
    echo "🇳🇬 Stay Gingered! 🚀"
else
    echo "❌ Failed to install dependencies. Please check the errors above."
    exit 1
fi
