#!/bin/bash
# Quick script to run Docker container locally

echo "🚀 Starting UDSSA Website in Docker..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local not found!"
    echo "📝 Please create .env.local with required environment variables"
    echo "   See env.example for reference"
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop."
    exit 1
fi

# Ask user which mode to run
echo ""
echo "Select mode:"
echo "1) Production build (recommended)"
echo "2) Development mode (with hot reload)"
read -p "Enter choice [1-2]: " choice

case $choice in
    1)
        echo "📦 Building and starting production container..."
        docker-compose up --build
        ;;
    2)
        echo "🛠️  Building and starting development container..."
        docker-compose -f docker-compose.dev.yml up --build
        ;;
    *)
        echo "Invalid choice. Using production mode..."
        docker-compose up --build
        ;;
esac

