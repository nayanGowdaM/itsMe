#!/bin/bash

# Manual sync script for nayan-codes-showcase
# Run this script to manually sync your changes

set -e  # Exit on any error

echo "🚀 Starting manual sync to nayan-codes-showcase..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Do you want to commit them first? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Enter commit message: " COMMIT_MSG
        git commit -m "$COMMIT_MSG"
    else
        echo "❌ Please commit or stash your changes first"
        exit 1
    fi
fi

# Add target repository as remote (if not already added)
if ! git remote get-url target > /dev/null 2>&1; then
    echo "🔗 Adding target repository as remote..."
    git remote add target https://github.com/nayanGowdaM/nayan-codes-showcase.git
else
    echo "✅ Target remote already exists"
fi

# Fetch target repository
echo "📥 Fetching target repository..."
git fetch target

# Push to target repository
echo "📤 Pushing to target repository..."
git push target HEAD:main --force-with-lease

echo "✅ Successfully synced $CURRENT_BRANCH to nayan-codes-showcase/main"
echo "🎉 Sync completed!"

# Optional: Open the target repository
read -p "Do you want to open nayan-codes-showcase in browser? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v xdg-open > /dev/null; then
        xdg-open "https://github.com/nayanGowdaM/nayan-codes-showcase"
    elif command -v open > /dev/null; then
        open "https://github.com/nayanGowdaM/nayan-codes-showcase"
    else
        echo "🌐 Visit: https://github.com/nayanGowdaM/nayan-codes-showcase"
    fi
fi