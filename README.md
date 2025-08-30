# Weizheng Liang - Portfolio Website

My personal portfolio website built with Nuxt 3 and deployed on GitHub Pages.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Build and copy to docs directory for GitHub Pages
./build-docs.sh
```

### GitHub Pages Deployment

**IMPORTANT**: After pushing changes, you need to configure GitHub Pages to serve from the `docs` directory:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **main** branch and **/docs** folder
5. Click **Save**

This ensures GitHub Pages serves your built website instead of the README file.

## 🏗️ Build Process

The site uses Static Site Generation (SSG) with Nuxt 3:

- **SSR Enabled**: Content is pre-rendered into static HTML files
- **Blog Posts**: Each blog post gets its own static HTML file
- **Routing**: Client-side routing with fallback to 404.html for GitHub Pages compatibility

## 📁 Project Structure

```
├── app/                 # Nuxt app files
├── content/            # Content files (blog, projects, etc.)
├── docs/               # Built static files (for GitHub Pages)
├── public/             # Static assets
└── build-docs.sh       # Build script for deployment
```

## 🔧 Configuration

- **Nuxt Config**: `nuxt.config.ts` - Main configuration with SSR enabled
- **Content**: `content.config.ts` - Content collections and schemas
- **Deploy**: `.github/workflows/deploy.yml` - GitHub Actions deployment

## 📝 Blog Posts

Blog posts are written in Markdown and automatically converted to static HTML during build:

- `/blog/2024-11-12-combat` - Melee Combat System
- `/blog/2024-8-21-dungball` - DungBall Game
- `/blog/2024-8-3-polyspell` - PolySpell Project
- `/blog/2025-5-18-investor` - Investor Game
- `/blog/2024-12-30-alien` - Alien Game

## 🚀 Deployment

1. Make changes to your code
2. Run `./build-docs.sh` to build and copy files to docs directory
3. Commit and push changes: `git add . && git commit -m "Update" && git push`
4. GitHub Actions will automatically deploy from the docs directory

## 🐛 Troubleshooting

**If you see a 404 page:**
1. Ensure GitHub Pages is configured to serve from `/docs` directory
2. Check that the `docs` directory contains your built website files
3. Verify the build was successful by running `./build-docs.sh`

**If blog posts don't work on refresh:**
1. Ensure SSR is enabled in `nuxt.config.ts`
2. Check that all blog routes are listed in the prerender configuration
3. Rebuild the site with `./build-docs.sh`
