# Quick Reference Card

## 🎯 Most Common Tasks

### Start Working
```bash
cd /Users/2346263/projects/scoalateofil/new_site
npm run dev
# Visit http://localhost:4321
```

### Edit Content
```
File location: src/data/pages/[section]/[subsection].md

Examples:
- src/data/pages/gradinita/metoda-pedagogica.md
- src/data/pages/scoala-primara/echipa-noastra.md
- src/data/pages/acasa/scurt-istoric.md
```

### Add Images
```
1. Place image in: public/images/[section]/
2. In markdown file, reference: /images/[section]/filename.jpg
3. Update frontmatter:
   image: '/images/gradinita/hero.jpg'
```

### Create News Article
```
1. Create: src/data/post/2025-11-03-my-news.md
2. Add frontmatter:
---
title: 'My News Title'
category: 'gradinita'
publishDate: 2025-11-03
---
3. Write content below
```

### Save & Deploy
```bash
git add .
git commit -m "Updated content"
git push
# Netlify auto-deploys!
```

## 📁 File Locations Cheat Sheet

| What | Where |
|------|-------|
| Page content | `src/data/pages/[section]/[file].md` |
| News articles | `src/data/post/[date]-[title].md` |
| Images | `public/images/[section]/` |
| Navigation | `src/navigation.ts` |
| Site settings | `src/config.yaml` |
| Homepage | `src/pages/index.astro` |
| Contact page | `src/pages/contact.astro` |

## 🗂️ Section Folders

| Section | Folder |
|---------|--------|
| ACASĂ | `acasa/` |
| GRĂDINIȚĂ | `gradinita/` |
| ȘCOALĂ PRIMARĂ | `scoala-primara/` |
| ȘCOALĂ GIMNAZIALĂ | `scoala-gimnaziala/` |

## 📝 Markdown Frontmatter Template

```yaml
---
title: 'Page Title'
description: 'Short description'
section: 'gradinita'
subsection: 'metoda-pedagogica'
order: 1
publishDate: 2025-11-03
draft: false
image: '/images/gradinita/hero.jpg'
---

# Your content here
```

## 🎨 Image Naming

```
Format: section-purpose-description.jpg

Examples:
- gradinita-hero-classroom.jpg
- acasa-team-director.jpg
- scoala-primara-gallery-sports-day.jpg
```

## 💻 Terminal Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development (http://localhost:4321) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Check for errors |

## 🔍 Finding Files

### View structure:
```bash
tree src/data/pages -L 2
```

### Search for content:
```bash
grep -r "search term" src/data/pages/
```

### List all markdown files:
```bash
find src/data/pages -name "*.md"
```

## 🚨 Emergency Commands

### Site won't start:
```bash
rm -rf node_modules
npm install
npm run dev
```

### Clear cache:
```bash
rm -rf dist
rm -rf .astro
npm run dev
```

### Undo last change:
```bash
git reset --soft HEAD~1
```

## 📚 Documentation Index

| Need Help With... | Read This |
|-------------------|-----------|
| Getting started | START_HERE.md |
| Editing content | CONTENT_EDITING_GUIDE.md |
| Finding files | CONTENT_STRUCTURE.md |
| Understanding project | PROJECT_GUIDE.md |
| Technical details | ARCHITECTURE.md |
| Deploying | DEPLOYMENT_CHECKLIST.md |

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Changes not showing | Refresh browser (Cmd+Shift+R) |
| Build fails | Check for syntax errors in markdown |
| Images not loading | Check file path and name |
| Page not found | Verify file location and name |
| Git push fails | Check remote URL: `git remote -v` |

## 🌐 URLs After Deploy

| Environment | URL |
|------------|-----|
| Local dev | http://localhost:4321 |
| Netlify preview | https://[random].netlify.app |
| Production | https://scoalateofil.ro |

## ⌨️ VS Code Shortcuts

| Action | Shortcut (Mac) |
|--------|----------------|
| Save file | Cmd+S |
| Save all | Cmd+Option+S |
| Search in files | Cmd+Shift+F |
| Open terminal | Ctrl+` |
| Quick open | Cmd+P |

## 🎯 Priority Checklist

### Week 1
- [ ] Fill ACASĂ section content
- [ ] Add school logo
- [ ] Upload team photos
- [ ] Test locally

### Week 2
- [ ] Fill GRĂDINIȚĂ content
- [ ] Upload grădiniță images
- [ ] Create 2-3 news articles
- [ ] Customize homepage

### Week 3
- [ ] Fill ȘCOALĂ PRIMARĂ content
- [ ] Fill ȘCOALĂ GIMNAZIALĂ content
- [ ] Upload all gallery photos
- [ ] Update contact page

### Week 4
- [ ] Review all content
- [ ] Test on mobile
- [ ] Set up GitHub
- [ ] Deploy to Netlify

## 📞 Quick Links

- Astro Docs: https://docs.astro.build
- Markdown Guide: https://www.markdownguide.org
- Image Compression: https://tinypng.com
- Icon Finder: https://icon-sets.iconify.design

---

**Keep this card handy for quick reference! 🚀**

Print it out or bookmark it in your browser!
