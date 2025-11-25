# Website Architecture & Content Flow

## 🏗️ Site Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      ȘCOALA TEOFIL                          │
│                    www.scoalateofil.ro                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
        ┌─────────────────────────────────────────┐
        │          HOMEPAGE (index.astro)         │
        │  - Hero section with school welcome     │
        │  - Quick links to main sections         │
        │  - Latest news highlights               │
        │  - Call to action (Înscrieri)          │
        └─────────────────────────────────────────┘
                              │
        ┌─────────────────────┴──────────────────────┐
        │                                             │
        ▼                                             ▼
┌───────────────┐                            ┌──────────────┐
│     ACASĂ     │                            │   CONTACT    │
└───────────────┘                            └──────────────┘
        │
        ├── Scurt istoric
        └── Echipa noastră
        
┌──────────────────────────────────────────────────────────────┐
│                    MAIN SECTIONS (3)                         │
└──────────────────────────────────────────────────────────────┘
        │
        ├── GRĂDINIȚĂ
        │   ├── Metoda pedagogică
        │   ├── Echipa noastră
        │   ├── Noutăți → (Blog/Posts)
        │   ├── Galerie foto
        │   ├── Înscrieri
        │   └── Informații utile (Q&A)
        │
        ├── ȘCOALĂ PRIMARĂ
        │   ├── Metoda pedagogică
        │   ├── Echipa noastră
        │   ├── Noutăți → (Blog/Posts)
        │   ├── Galerie foto
        │   ├── Înscrieri
        │   └── Informații utile (Q&A)
        │
        └── ȘCOALĂ GIMNAZIALĂ
            ├── Metoda pedagogică
            ├── Echipa noastră
            ├── Noutăți → (Blog/Posts)
            ├── Galerie foto
            ├── Înscrieri
            └── Informații utile (Q&A)
```

## 📊 Data Flow

```
┌──────────────────┐
│  Markdown Files  │  ← You edit these
│  src/data/pages/ │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Content Schema  │  ← Validates structure
│  config.ts       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Astro Components │  ← Renders content
│  src/pages/      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   HTML Output    │  ← What users see
│     dist/        │
└──────────────────┘
```

## 🔄 Development Workflow

```
┌─────────────────┐
│  1. Edit Files  │
│  - Markdown     │
│  - Images       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. Dev Server  │
│  npm run dev    │
│  Auto-refresh   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. Test Local  │
│  localhost:4321 │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. Git Commit  │
│  Save changes   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  5. Push GitHub │
│  git push       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. Auto Deploy │
│  Netlify        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  7. Live Site!  │
│  scoalateofil.ro│
└─────────────────┘
```

## 🗂️ File Structure Breakdown

```
new_site/
│
├─── 📄 Configuration Files
│    ├── package.json          → Dependencies
│    ├── astro.config.ts       → Astro settings
│    ├── tailwind.config.js    → Styling
│    ├── netlify.toml          → Deployment
│    └── src/config.yaml       → Site settings
│
├─── 📝 Content Files
│    ├── src/data/pages/       → Page content (YOU EDIT)
│    │   ├── acasa/
│    │   ├── gradinita/
│    │   ├── scoala-primara/
│    │   └── scoala-gimnaziala/
│    │
│    └── src/data/post/        → News articles (YOU EDIT)
│
├─── 🎨 Template Files
│    ├── src/pages/            → Page templates
│    ├── src/components/       → UI components
│    └── src/layouts/          → Page layouts
│
├─── 🖼️ Static Assets
│    └── public/
│         ├── images/          → Your photos (YOU ADD)
│         └── favicon.ico      → Site icon
│
└─── 📚 Documentation
     ├── START_HERE.md         → This summary
     ├── PROJECT_GUIDE.md      → Full guide
     ├── CONTENT_EDITING_GUIDE.md → How to edit
     ├── DEPLOYMENT_CHECKLIST.md → Deploy steps
     └── CONTENT_STRUCTURE.md  → Site map
```

## 🎯 Content Management Matrix

| Section | Subsection | File Location | Image Location | Status |
|---------|-----------|---------------|----------------|--------|
| **ACASĂ** | Scurt istoric | `acasa/scurt-istoric.md` | `images/acasa/` | ✅ Template |
| | Echipa noastră | `acasa/echipa-noastra.md` | `images/acasa/` | ✅ Template |
| **GRĂDINIȚĂ** | Metoda pedagogică | `gradinita/metoda-pedagogica.md` | `images/gradinita/` | ✅ Template |
| | Echipa noastră | `gradinita/echipa-noastra.md` | `images/gradinita/` | ✅ Template |
| | Noutăți | `gradinita/noutati.md` + posts | `images/gradinita/` | ✅ Template |
| | Galerie foto | `gradinita/galerie-foto.md` | `images/gradinita/gallery/` | ✅ Template |
| | Înscrieri | `gradinita/inscrieri.md` | `images/gradinita/` | ✅ Template |
| | Info utile | `gradinita/informatii-utile.md` | `images/gradinita/` | ✅ Template |
| **ȘCOALĂ PRIMARĂ** | Metoda pedagogică | `scoala-primara/metoda-pedagogica.md` | `images/scoala-primara/` | ✅ Template |
| | Echipa noastră | `scoala-primara/echipa-noastra.md` | `images/scoala-primara/` | ✅ Template |
| | Noutăți | `scoala-primara/noutati.md` + posts | `images/scoala-primara/` | ✅ Template |
| | Galerie foto | `scoala-primara/galerie-foto.md` | `images/scoala-primara/gallery/` | ✅ Template |
| | Înscrieri | `scoala-primara/inscrieri.md` | `images/scoala-primara/` | ✅ Template |
| | Info utile | `scoala-primara/informatii-utile.md` | `images/scoala-primara/` | ✅ Template |
| **ȘCOALĂ GIMNAZIALĂ** | Metoda pedagogică | `scoala-gimnaziala/metoda-pedagogica.md` | `images/scoala-gimnaziala/` | ✅ Template |
| | Echipa noastră | `scoala-gimnaziala/echipa-noastra.md` | `images/scoala-gimnaziala/` | ✅ Template |
| | Noutăți | `scoala-gimnaziala/noutati.md` + posts | `images/scoala-gimnaziala/` | ✅ Template |
| | Galerie foto | `scoala-gimnaziala/galerie-foto.md` | `images/scoala-gimnaziala/gallery/` | ✅ Template |
| | Înscrieri | `scoala-gimnaziala/inscrieri.md` | `images/scoala-gimnaziala/` | ✅ Template |
| | Info utile | `scoala-gimnaziala/informatii-utile.md` | `images/scoala-gimnaziala/` | ✅ Template |

## 🎨 User Experience Flow

```
┌──────────────┐
│   VISITOR    │
└──────┬───────┘
       │
       ▼
┌────────────────────┐
│    Homepage        │
│  - Welcome         │
│  - Overview        │
│  - Latest news     │
└─────┬──────────────┘
      │
      │ User clicks section
      ▼
┌────────────────────┐
│  Section Landing   │
│  (e.g., Grădiniță) │
└─────┬──────────────┘
      │
      │ User explores
      ▼
┌────────────────────────┐
│  Subsection Pages      │
│  - Metoda pedagogică   │
│  - Echipa              │
│  - Galerie             │
└─────┬──────────────────┘
      │
      │ User interested
      ▼
┌────────────────────┐
│  Înscrieri Page    │
│  - Information     │
│  - Contact details │
└─────┬──────────────┘
      │
      ▼
┌────────────────────┐
│  Contact Page      │
│  - Form            │
│  - Phone/Email     │
└────────────────────┘
```

## 🔧 Technical Stack

```
┌─────────────────────────────────────────┐
│           FRONTEND                      │
│  ┌──────────────────────────────────┐  │
│  │  Astro 5.0                       │  │
│  │  (Static Site Generator)         │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  AstroWind Theme                 │  │
│  │  (UI Components)                 │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  Tailwind CSS                    │  │
│  │  (Styling)                       │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│           CONTENT                       │
│  ┌──────────────────────────────────┐  │
│  │  Markdown Files                  │  │
│  │  (Easy to edit)                  │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  YAML Frontmatter                │  │
│  │  (Metadata)                      │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         VERSION CONTROL                 │
│  ┌──────────────────────────────────┐  │
│  │  Git                             │  │
│  │  (Track changes)                 │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │  GitHub                          │  │
│  │  (Store code)                    │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         DEPLOYMENT                      │
│  ┌──────────────────────────────────┐  │
│  │  Netlify                         │  │
│  │  - Build on push                 │  │
│  │  - CDN hosting                   │  │
│  │  - SSL certificate               │  │
│  │  - Custom domain                 │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         PRODUCTION                      │
│        www.scoalateofil.ro              │
└─────────────────────────────────────────┘
```

## 📈 Project Timeline

### ✅ Phase 1: Setup (COMPLETED)
- Project initialization
- Structure creation
- Content templates
- Documentation

### 🔄 Phase 2: Content (IN PROGRESS - Your Turn!)
- Fill in markdown files
- Add images
- Customize pages
- Test locally

### ⏳ Phase 3: Customization (Next)
- Homepage design
- Contact page
- Branding
- Colors

### ⏳ Phase 4: Launch (Final)
- GitHub setup
- Netlify deployment
- Domain configuration
- Go live!

## 🎓 Learning Path

```
START → Read START_HERE.md (You are here!)
  ↓
      Read PROJECT_GUIDE.md (Overview)
  ↓
      Read CONTENT_EDITING_GUIDE.md (How to edit)
  ↓
      Read CONTENT_STRUCTURE.md (Site map)
  ↓
      Start editing content!
  ↓
      Read DEPLOYMENT_CHECKLIST.md (When ready)
  ↓
END  → Launch your site! 🚀
```

---

**You're all set! Time to start building your school's website! 🎉**
