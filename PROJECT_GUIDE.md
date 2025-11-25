# Școala Teofil - New Website Project

Welcome to the new Școala Teofil website built with Astro and the AstroWind theme!

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Content Management](#content-management)
- [Development](#development)
- [Deployment](#deployment)
- [Next Steps](#next-steps)

## 🎯 Project Overview

This is a modern static website for Școala Teofil, built using:
- **Astro** - Modern web framework for building fast, content-focused websites
- **AstroWind** - A beautiful, responsive theme with Tailwind CSS
- **Markdown** - Simple format for managing content
- **GitHub** - Version control and collaboration
- **Netlify** - Continuous deployment and hosting (free tier)

### Main Sections

The website is organized into four main sections:

1. **ACASĂ** (Home)
   - Scurt istoric
   - Echipa noastră

2. **GRĂDINIȚĂ** (Kindergarten)
   - Metoda pedagogică
   - Echipa noastră
   - Noutăți
   - Galerie foto
   - Înscrieri
   - Informații utile (Q&A)

3. **ȘCOALĂ PRIMARĂ** (Primary School)
   - Metoda pedagogică
   - Echipa noastră
   - Noutăți
   - Galerie foto
   - Înscrieri
   - Informații utile (Q&A)

4. **ȘCOALĂ GIMNAZIALĂ** (Middle School)
   - Metoda pedagogică
   - Echipa noastră
   - Noutăți
   - Galerie foto
   - Înscrieri
   - Informații utile (Q&A)

## 📁 Project Structure

```
new_site/
├── src/
│   ├── data/
│   │   ├── pages/           # All page content in Markdown
│   │   │   ├── acasa/
│   │   │   ├── gradinita/
│   │   │   ├── scoala-primara/
│   │   │   └── scoala-gimnaziala/
│   │   └── post/            # Blog posts/news articles
│   ├── pages/               # Astro page components
│   ├── components/          # Reusable UI components
│   ├── layouts/             # Page layouts
│   ├── navigation.ts        # Site navigation configuration
│   └── config.yaml          # Site-wide settings
├── public/
│   └── images/              # Static images
│       ├── acasa/
│       ├── gradinita/
│       ├── scoala-primara/
│       └── scoala-gimnaziala/
├── package.json
└── netlify.toml             # Netlify deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.17.1 or higher)
- npm (comes with Node.js)
- Git
- A code editor (VS Code recommended)

### Installation

The project is already set up! To verify:

```bash
cd /Users/2346263/projects/scoalateofil/new_site
npm run dev
```

This will start the development server at `http://localhost:4321`

## ✍️ Content Management

### Adding/Editing Page Content

All content is stored in Markdown files in `src/data/pages/`. Each section has its own folder.

**Example: Editing the "Scurt istoric" page**

Open: `src/data/pages/acasa/scurt-istoric.md`

```markdown
---
title: 'Scurt istoric'
description: 'Istoria Școlii Teofil'
section: 'acasa'
subsection: 'scurt-istoric'
order: 1
publishDate: 2025-11-03
draft: false
image: '/images/acasa/istoric-hero.jpg'
---

# Your content here

Write your content in Markdown format...
```

### Adding Images

1. Place your images in the appropriate folder under `public/images/`
2. Reference them in your markdown: `/images/section-name/image-name.jpg`

**Example folder structure for images:**
```
public/images/
├── acasa/
│   ├── istoric-hero.jpg
│   └── echipa-hero.jpg
├── gradinita/
│   ├── metoda-hero.jpg
│   └── gallery/
│       ├── foto-1.jpg
│       ├── foto-2.jpg
│       └── foto-3.jpg
```

### Creating News/Blog Posts

Create new files in `src/data/post/` with the category matching the section:

```markdown
---
title: 'Your news title'
publishDate: 2025-11-03
category: 'gradinita'  # or 'scoala-primara', 'scoala-gimnaziala'
image: '/images/gradinita/news-image.jpg'
tags: ['activitati', 'evenimente']
---

Your news content here...
```

## 🛠️ Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for errors
npm run check

# Format code
npm run fix
```

### Important Files to Customize

1. **`src/navigation.ts`** - Already configured with your menu structure
2. **`src/config.yaml`** - Site settings (already updated with school info)
3. **`src/pages/index.astro`** - Homepage (needs customization)
4. **`public/favicon.ico`** - Replace with school logo

## 🚀 Deployment

### Setting up GitHub

1. **Initialize git repository** (if not already done):
   ```bash
   cd /Users/2346263/projects/scoalateofil/new_site
   git init
   git add .
   git commit -m "Initial commit - Școala Teofil website"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it: `scoalateofil-website` (or any name you prefer)
   - Keep it public or private (both work with Netlify)
   - Don't initialize with README (we already have one)

3. **Connect and push**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/scoalateofil-website.git
   git branch -M main
   git push -u origin main
   ```

### Setting up Netlify

1. **Log in to Netlify**: https://app.netlify.com/

2. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your GitHub
   - Select your `scoalateofil-website` repository

3. **Configure build settings** (should auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Configure custom domain** (optional):
   - Go to "Domain settings"
   - Add your custom domain `scoalateofil.ro`
   - Follow DNS configuration instructions

### Continuous Deployment

Once set up, every time you push to GitHub, Netlify will automatically:
1. Build your site
2. Deploy the new version
3. Make it live!

**Workflow:**
```bash
# Make changes to your content
# Save files

git add .
git commit -m "Updated grădiniță content"
git push

# Netlify automatically deploys!
```

## 📝 Next Steps

### Immediate Tasks

1. **Customize the Homepage**
   - Edit `src/pages/index.astro`
   - Add hero section with school information
   - Add highlights about the school

2. **Add Your Content**
   - Fill in all the markdown files in `src/data/pages/`
   - Add your text, replacing the placeholder content
   - Add real information about teachers, programs, etc.

3. **Add Images**
   - Place your photos in `public/images/`
   - Update image references in markdown frontmatter
   - Create galleries for each section

4. **Create Page Templates**
   - You'll need to create Astro page components that read from the markdown files
   - Example: `src/pages/[section]/[subsection].astro`
   - The AstroWind theme provides examples you can adapt

5. **Customize Contact Page**
   - Edit `src/pages/contact.astro`
   - Add school contact information
   - Set up contact form (can use Netlify Forms)

6. **Add Logo and Branding**
   - Replace `public/favicon.ico`
   - Add school logo to header
   - Customize colors in `tailwind.config.js`

### Learning Resources

- **Astro Documentation**: https://docs.astro.build
- **AstroWind Docs**: Check the README.md in your project
- **Markdown Guide**: https://www.markdownguide.org/
- **Netlify Docs**: https://docs.netlify.com/

## 🎨 Customization Tips

### Changing Colors

Edit `tailwind.config.js` to customize your color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Adding Romanian Language Support

The language is already set to Romanian (`ro`) in `config.yaml`, but you may want to:
- Update any hardcoded English text in components
- Ensure date formatting uses Romanian locale

## 💰 Staying in Netlify Free Tier

The free tier includes:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Custom domain support
- ✅ HTTPS
- ✅ Continuous deployment

Your small presentation site should easily fit within these limits!

## 📞 Support

If you need help:
1. Check Astro documentation: https://docs.astro.build
2. AstroWind GitHub issues: https://github.com/onwidget/astrowind/issues
3. Netlify support: https://answers.netlify.com/

## 📄 License

This project uses the AstroWind template. Check LICENSE.md for details.

---

**Good luck with your new website for Școala Teofil! 🎓**
