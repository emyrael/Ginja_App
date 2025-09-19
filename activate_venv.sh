#!/bin/bash

# Ginja Virtual Environment Activation Script
echo "🚀 Activating Ginja virtual environment..."

# Check if venv exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found. Please run setup first."
    echo "Run: python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
    exit 1
fi

# Activate virtual environment
source venv/bin/activate

echo "✅ Virtual environment activated!"
echo "📦 Installed packages:"
pip list --local | grep -E "(flask|supabase|openai|pytest|black)"
echo ""
echo "💡 To deactivate, run: deactivate"
echo "🇳🇬 Stay Gingered! 🚀"
