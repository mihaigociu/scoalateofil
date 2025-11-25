# Școala Teofil Website - Content Structure

## 📐 Complete Site Structure

```
ȘCOALA TEOFIL WEBSITE
│
├── ACASĂ (Home)
│   ├── Scurt istoric
│   │   File: src/data/pages/acasa/scurt-istoric.md
│   │   Images: public/images/acasa/
│   │   
│   └── Echipa noastră
│       File: src/data/pages/acasa/echipa-noastra.md
│       Images: public/images/acasa/
│
├── GRĂDINIȚĂ (Kindergarten)
│   ├── Metoda pedagogică
│   │   File: src/data/pages/gradinita/metoda-pedagogica.md
│   │   Images: public/images/gradinita/
│   │   
│   ├── Echipa noastră
│   │   File: src/data/pages/gradinita/echipa-noastra.md
│   │   Images: public/images/gradinita/
│   │   
│   ├── Noutăți
│   │   File: src/data/pages/gradinita/noutati.md
│   │   Blog posts: src/data/post/ (category: 'gradinita')
│   │   
│   ├── Galerie foto
│   │   File: src/data/pages/gradinita/galerie-foto.md
│   │   Images: public/images/gradinita/gallery/
│   │   
│   ├── Înscrieri
│   │   File: src/data/pages/gradinita/inscrieri.md
│   │   Images: public/images/gradinita/
│   │   
│   └── Informații utile (Q&A)
│       File: src/data/pages/gradinita/informatii-utile.md
│       Images: public/images/gradinita/
│
├── ȘCOALĂ PRIMARĂ (Primary School)
│   ├── Metoda pedagogică
│   │   File: src/data/pages/scoala-primara/metoda-pedagogica.md
│   │   Images: public/images/scoala-primara/
│   │   
│   ├── Echipa noastră
│   │   File: src/data/pages/scoala-primara/echipa-noastra.md
│   │   Images: public/images/scoala-primara/
│   │   
│   ├── Noutăți
│   │   File: src/data/pages/scoala-primara/noutati.md
│   │   Blog posts: src/data/post/ (category: 'scoala-primara')
│   │   
│   ├── Galerie foto
│   │   File: src/data/pages/scoala-primara/galerie-foto.md
│   │   Images: public/images/scoala-primara/gallery/
│   │   
│   ├── Înscrieri
│   │   File: src/data/pages/scoala-primara/inscrieri.md
│   │   Images: public/images/scoala-primara/
│   │   
│   └── Informații utile (Q&A)
│       File: src/data/pages/scoala-primara/informatii-utile.md
│       Images: public/images/scoala-primara/
│
└── ȘCOALĂ GIMNAZIALĂ (Middle School)
    ├── Metoda pedagogică
    │   File: src/data/pages/scoala-gimnaziala/metoda-pedagogica.md
    │   Images: public/images/scoala-gimnaziala/
    │   
    ├── Echipa noastră
    │   File: src/data/pages/scoala-gimnaziala/echipa-noastra.md
    │   Images: public/images/scoala-gimnaziala/
    │   
    ├── Noutăți
    │   File: src/data/pages/scoala-gimnaziala/noutati.md
    │   Blog posts: src/data/post/ (category: 'scoala-gimnaziala')
    │   
    ├── Galerie foto
    │   File: src/data/pages/scoala-gimnaziala/galerie-foto.md
    │   Images: public/images/scoala-gimnaziala/gallery/
    │   
    ├── Înscrieri
    │   File: src/data/pages/scoala-gimnaziala/inscrieri.md
    │   Images: public/images/scoala-gimnaziala/
    │   
    └── Informații utile (Q&A)
        File: src/data/pages/scoala-gimnaziala/informatii-utile.md
        Images: public/images/scoala-gimnaziala/
```

## 📁 Directory Tree

```
new_site/
│
├── src/
│   ├── data/
│   │   ├── pages/
│   │   │   ├── acasa/
│   │   │   │   ├── scurt-istoric.md ✅
│   │   │   │   └── echipa-noastra.md ✅
│   │   │   │
│   │   │   ├── gradinita/
│   │   │   │   ├── metoda-pedagogica.md ✅
│   │   │   │   ├── echipa-noastra.md ✅
│   │   │   │   ├── noutati.md ✅
│   │   │   │   ├── galerie-foto.md ✅
│   │   │   │   ├── inscrieri.md ✅
│   │   │   │   └── informatii-utile.md ✅
│   │   │   │
│   │   │   ├── scoala-primara/
│   │   │   │   ├── metoda-pedagogica.md ✅
│   │   │   │   ├── echipa-noastra.md ✅
│   │   │   │   ├── noutati.md ✅
│   │   │   │   ├── galerie-foto.md ✅
│   │   │   │   ├── inscrieri.md ✅
│   │   │   │   └── informatii-utile.md ✅
│   │   │   │
│   │   │   └── scoala-gimnaziala/
│   │   │       ├── metoda-pedagogica.md ✅
│   │   │       ├── echipa-noastra.md ✅
│   │   │       ├── noutati.md ✅
│   │   │       ├── galerie-foto.md ✅
│   │   │       ├── inscrieri.md ✅
│   │   │       └── informatii-utile.md ✅
│   │   │
│   │   └── post/
│   │       └── (news articles go here)
│   │
│   ├── pages/
│   │   ├── index.astro (Homepage - needs customization)
│   │   ├── contact.astro (needs customization)
│   │   └── [section]/
│   │       └── [subsection].astro (needs to be created)
│   │
│   ├── components/ (Reusable UI components)
│   ├── layouts/ (Page layouts)
│   ├── navigation.ts ✅ (Updated)
│   └── config.yaml ✅ (Updated)
│
├── public/
│   ├── images/
│   │   ├── acasa/
│   │   │   └── (add your images here)
│   │   ├── gradinita/
│   │   │   ├── (add hero images here)
│   │   │   └── gallery/
│   │   │       └── (add gallery photos here)
│   │   ├── scoala-primara/
│   │   │   ├── (add hero images here)
│   │   │   └── gallery/
│   │   │       └── (add gallery photos here)
│   │   └── scoala-gimnaziala/
│   │       ├── (add hero images here)
│   │       └── gallery/
│   │           └── (add gallery photos here)
│   │
│   └── favicon.ico (replace with school logo)
│
├── PROJECT_GUIDE.md ✅ (Complete guide)
├── CONTENT_EDITING_GUIDE.md ✅ (Quick reference)
├── DEPLOYMENT_CHECKLIST.md ✅ (Deployment steps)
├── CONTENT_STRUCTURE.md ✅ (This file)
│
├── package.json ✅
├── netlify.toml ✅ (Ready for Netlify)
├── astro.config.ts
└── tailwind.config.js
```

## 📝 Content Files Status

### ✅ Created (20 files)
All markdown template files have been created with placeholder content:

**ACASĂ (2 files)**
- scurt-istoric.md
- echipa-noastra.md

**GRĂDINIȚĂ (6 files)**
- metoda-pedagogica.md
- echipa-noastra.md
- noutati.md
- galerie-foto.md
- inscrieri.md
- informatii-utile.md

**ȘCOALĂ PRIMARĂ (6 files)**
- metoda-pedagogica.md
- echipa-noastra.md
- noutati.md
- galerie-foto.md
- inscrieri.md
- informatii-utile.md

**ȘCOALĂ GIMNAZIALĂ (6 files)**
- metoda-pedagogica.md
- echipa-noastra.md
- noutati.md
- galerie-foto.md
- inscrieri.md
- informatii-utile.md

### ⏳ To Be Created

**Astro Page Components**
You'll need to create dynamic pages to display the markdown content:
- `src/pages/[section]/[subsection].astro` - Dynamic page template
- Or individual pages for each section

**Sample News Articles**
- Example articles in `src/data/post/` for each category

## 🎨 Image Organization

### Required Images Per Section

#### ACASĂ
- `istoric-hero.jpg` - For history page
- `echipa-hero.jpg` - For team page
- Team member photos (individual photos)

#### GRĂDINIȚĂ
- `metoda-hero.jpg` - For pedagogical method page
- `echipa-hero.jpg` - For team page
- `noutati-hero.jpg` - For news page
- `galerie-hero.jpg` - For gallery landing
- `inscrieri-hero.jpg` - For enrollment page
- `qa-hero.jpg` - For Q&A page
- `gallery/foto-*.jpg` - Multiple gallery photos

#### ȘCOALĂ PRIMARĂ (same structure as Grădiniță)
- Hero images for each subsection
- Gallery photos
- Team photos

#### ȘCOALĂ GIMNAZIALĂ (same structure as Grădiniță)
- Hero images for each subsection
- Gallery photos
- Team photos

### Image Naming Convention

**Recommended format:**
```
{section}-{purpose}-{description}.jpg

Examples:
- gradinita-metoda-activitate-grupa-mica.jpg
- scoala-primara-galerie-sarbatoare-craciun-2024.jpg
- acasa-echipa-director-maria-popescu.jpg
```

## 🔄 Content Update Workflow

### For Regular Updates (News, Events)

1. **Create new post:**
   ```
   src/data/post/YYYY-MM-DD-title-slug.md
   ```

2. **Add frontmatter:**
   ```yaml
   category: 'gradinita' # or appropriate section
   ```

3. **Publish:**
   ```bash
   git add .
   git commit -m "Added news article: [title]"
   git push
   ```

### For Page Content Updates

1. **Edit markdown file** in `src/data/pages/`
2. **Update images** if needed
3. **Test locally:** `npm run dev`
4. **Publish:** git add, commit, push

### For Structural Changes

1. **Update navigation** in `src/navigation.ts`
2. **Create new markdown files** in appropriate folders
3. **Update content config** if needed
4. **Test thoroughly**
5. **Deploy**

## 📊 Content Priority

### Phase 1: Essential Content (Do First)
1. ✅ Site structure (DONE)
2. Homepage content and hero section
3. About/History page
4. Contact information
5. Basic team information for each section

### Phase 2: Section Content
1. Pedagogical methods for each level
2. Enrollment information
3. Q&A pages
4. Team details with photos

### Phase 3: Rich Content
1. News articles
2. Photo galleries
3. Detailed activity descriptions
4. Student testimonials (if applicable)

### Phase 4: Enhancement
1. Video content
2. Virtual tours
3. Forms integration
4. Calendar integration

## 🎯 Next Immediate Steps

1. **Fill in homepage content** (`src/pages/index.astro`)
2. **Add real content** to markdown files
3. **Gather and optimize images**
4. **Create page templates** to display markdown content
5. **Customize contact page**
6. **Test everything locally**
7. **Deploy to Netlify**

## 📞 Getting Help

**Documentation:**
- PROJECT_GUIDE.md - Complete project overview
- CONTENT_EDITING_GUIDE.md - How to edit content
- DEPLOYMENT_CHECKLIST.md - Deployment steps

**Online Resources:**
- Astro Docs: https://docs.astro.build
- Markdown Guide: https://www.markdownguide.org
- Netlify Docs: https://docs.netlify.com

---

**Structure is ready! Time to add your content! 🎉**
