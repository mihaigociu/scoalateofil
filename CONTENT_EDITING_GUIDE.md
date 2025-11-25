# Quick Start Guide - Editing Content

## 📝 How to Edit Page Content

### Step 1: Find Your Page

All content is in: `src/data/pages/`

**Structure:**
```
src/data/pages/
├── acasa/
│   ├── scurt-istoric.md
│   └── echipa-noastra.md
├── gradinita/
│   ├── metoda-pedagogica.md
│   ├── echipa-noastra.md
│   ├── noutati.md
│   ├── galerie-foto.md
│   ├── inscrieri.md
│   └── informatii-utile.md
├── scoala-primara/
│   └── ... (same as gradinita)
└── scoala-gimnaziala/
    └── ... (same as gradinita)
```

### Step 2: Edit the Markdown File

Open the file and edit the content. Each file has two parts:

#### Frontmatter (between the `---`)
```markdown
---
title: 'Your Page Title'
description: 'Brief description'
section: 'gradinita'
subsection: 'metoda-pedagogica'
image: '/images/gradinita/hero-image.jpg'
---
```

#### Content (below the `---`)
```markdown
# Main Heading

Your content here in Markdown format.

## Subheading

More content...

- Bullet point 1
- Bullet point 2

**Bold text** and *italic text*
```

### Step 3: Save and Preview

```bash
# In terminal, start the dev server if not already running
npm run dev

# Open browser to http://localhost:4321
# Changes will appear automatically!
```

## 🖼️ Adding Images

### For Hero Images (top of page)

1. **Add image to folder:**
   ```
   public/images/gradinita/metoda-hero.jpg
   ```

2. **Reference in frontmatter:**
   ```markdown
   ---
   image: '/images/gradinita/metoda-hero.jpg'
   ---
   ```

### For Gallery Images

1. **Add images to gallery folder:**
   ```
   public/images/gradinita/gallery/
   ├── foto-1.jpg
   ├── foto-2.jpg
   └── foto-3.jpg
   ```

2. **Reference in frontmatter:**
   ```markdown
   ---
   gallery:
     - '/images/gradinita/gallery/foto-1.jpg'
     - '/images/gradinita/gallery/foto-2.jpg'
     - '/images/gradinita/gallery/foto-3.jpg'
   ---
   ```

### For Images in Content

```markdown
![Description of image](/images/gradinita/photo.jpg)
```

## ✍️ Markdown Formatting Cheat Sheet

### Headings
```markdown
# Heading 1 (largest)
## Heading 2
### Heading 3
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
```

### Lists
```markdown
Unordered list:
- Item 1
- Item 2
  - Sub-item

Ordered list:
1. First item
2. Second item
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/path/to/image.jpg)
```

### Quotes
```markdown
> This is a quote
```

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Row 1    | Data     |
| Row 2    | Data     |
```

## 📰 Creating News Articles

### Step 1: Create New File

Create a new file in `src/data/post/`:
```
src/data/post/2025-11-03-titlu-articol.md
```

### Step 2: Add Content

```markdown
---
title: 'Titlul articolului'
publishDate: 2025-11-03
category: 'gradinita'  # or 'scoala-primara', 'scoala-gimnaziala'
image: '/images/gradinita/article-image.jpg'
excerpt: 'Scurtă descriere a articolului'
tags: ['evenimente', 'activitati']
draft: false  # Set to true to hide from site
---

# Titlul articolului

Conținutul articolului aici...
```

## 🚀 Publishing Changes

### Method 1: Using Git Commands

```bash
# Save your changes
git add .
git commit -m "Updated grădiniță content"
git push

# Netlify will automatically deploy!
```

### Method 2: Using VS Code

1. Click Source Control icon (left sidebar)
2. Review changes
3. Type commit message
4. Click ✓ (commit)
5. Click "..." → Push

## 📋 Content Checklist

Before publishing, make sure:

- [ ] All placeholder text is replaced with real content
- [ ] Images are added and properly referenced
- [ ] No spelling/grammar errors
- [ ] Links work correctly
- [ ] Contact information is accurate
- [ ] SEO descriptions are filled in
- [ ] Images have proper alt text

## 🆘 Common Issues

### Issue: Images not showing
**Solution:** Check the path starts with `/` and matches the folder structure:
```markdown
✅ /images/gradinita/photo.jpg
❌ images/gradinita/photo.jpg
❌ /public/images/gradinita/photo.jpg
```

### Issue: Changes not appearing
**Solution:** 
1. Save the file
2. Check terminal for errors
3. Refresh browser (hard refresh: Cmd+Shift+R on Mac)

### Issue: Build errors
**Solution:** Check for:
- Missing closing quotes in frontmatter
- Incorrect date format (should be YYYY-MM-DD)
- Missing required fields in frontmatter

## 💡 Tips

1. **Use descriptive image names:**
   - ✅ `echipa-gradinita-2025.jpg`
   - ❌ `IMG_1234.jpg`

2. **Optimize images before uploading:**
   - Resize to appropriate dimensions (max 1920px width)
   - Compress to reduce file size
   - Use JPEG for photos, PNG for graphics with transparency

3. **Write SEO-friendly descriptions:**
   - Include relevant keywords
   - Keep descriptions under 160 characters
   - Make them enticing to click!

4. **Keep URLs simple:**
   - Use lowercase
   - Use hyphens, not spaces
   - Keep them short and descriptive

## 📚 More Resources

- Markdown Guide: https://www.markdownguide.org/
- Astro Documentation: https://docs.astro.build/
- Image Optimization: https://tinypng.com/

---

Happy editing! 🎉
