#!/bin/bash
set -e

echo "🚀 Starting Conductor workspace setup..."
echo ""

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ Error: pnpm is not installed or not in PATH"
    echo ""
    echo "Please install pnpm first:"
    echo "  npm install -g pnpm"
    echo "  or visit: https://pnpm.io/installation"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in PATH"
    echo ""
    echo "Please install Node.js first:"
    echo "  Visit: https://nodejs.org/"
    exit 1
fi

echo "✓ pnpm version: $(pnpm --version)"
echo "✓ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed successfully"
echo ""

# Setup environment file
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        echo "📝 Creating .env file from .env.example..."
        cp .env.example .env
        echo "✓ .env file created"
        echo "⚠️  Note: Please review and update .env with your actual values"
    else
        echo "⚠️  Warning: No .env.example file found, skipping .env creation"
    fi
else
    echo "✓ .env file already exists"
fi

echo ""
echo "✅ Workspace setup complete!"
echo ""
echo "You can now:"
echo "  • Use the 'Run' button to start the development server"
echo "  • Run 'pnpm dev' manually to start development"
echo "  • Run 'pnpm build' to create a production build"
