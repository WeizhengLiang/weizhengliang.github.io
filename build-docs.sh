#!/bin/bash

# Build script for GitHub Pages deployment
echo "🚀 Building Nuxt site..."

# Clean previous builds
rm -rf .output .nuxt docs

# Build the site
npm run build

# Create docs directory and copy built files
echo "📁 Copying files to docs directory..."
mkdir -p docs
cp -r .output/public/* docs/

# Clean up build artifacts
echo "🧹 Cleaning up build artifacts..."
rm -rf .output .nuxt

echo "✅ Build complete! Files are ready in the docs directory."
echo "📝 Don't forget to commit and push the changes!"
