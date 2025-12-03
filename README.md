# 🎓 Școala Teofil - Official Website# 🚀 AstroWind

Modern, fast, and user-friendly website for Școala Teofil built with Astro and the AstroWind theme.<img src="https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/lighthouse-score.png" align="right"

     alt="AstroWind Lighthouse Score" width="100" height="358">

## 🚀 Quick Start

🌟 _Most *starred* & *forked* Astro theme in 2022, 2023 & 2024_. 🌟

````bash

# Start development server**AstroWind** is a free and open-source template to make your website using **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

npm run dev

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.

# Build for production- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.

npm run build- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...

- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).

# Preview production build- ✅ Generation of **project sitemap** based on your routes.

npm run preview- ✅ **Open Graph tags** for social media sharing.

```- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.



Visit: http://localhost:4321<br>



## 📚 Documentation![AstroWind Theme Screenshot](https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)



| Document | Description | When to Use |[![arthelokyo](https://custom-icon-badges.demolab.com/badge/made%20by%20-arthelokyo-556bf2?style=flat-square&logo=arthelokyo&logoColor=white&labelColor=101827)](https://github.com/arthelokyo)

|----------|-------------|-------------|[![License](https://img.shields.io/github/license/arthelokyo/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/arthelokyo/astrowind/blob/main/LICENSE.md)

| **[START_HERE.md](START_HERE.md)** | Quick overview and next steps | First time setup |[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo)

| **[PROJECT_GUIDE.md](PROJECT_GUIDE.md)** | Complete project documentation | Understanding the project |[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/arthelokyo/astrowind#contributing)

| **[CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md)** | How to edit content | Adding/editing content |[![Known Vulnerabilities](https://snyk.io/test/github/arthelokyo/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/arthelokyo/astrowind)

| **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** | Deploy to production | Going live |[![Stars](https://img.shields.io/github/stars/arthelokyo/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)

| **[CONTENT_STRUCTURE.md](CONTENT_STRUCTURE.md)** | Site structure overview | Finding specific files |[![Forks](https://img.shields.io/github/forks/arthelokyo/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/arthelokyo/astrowind)

| **[ARCHITECTURE.md](ARCHITECTURE.md)** | Technical architecture | Understanding how it works |

<br>

## 🏗️ Project Structure

<details open>

```<summary>Table of Contents</summary>

new_site/

├── src/- [Demo](#demo)

│   ├── data/- [Upcoming: AstroWind 2.0 – We Need Your Vision!](#-upcoming-astrowind-20--we-need-your-vision)

│   │   ├── pages/          # ← Edit your content here- [TL;DR](#tldr)

│   │   │   ├── acasa/- [Getting started](#getting-started)

│   │   │   ├── gradinita/  - [Project structure](#project-structure)

│   │   │   ├── scoala-primara/  - [Commands](#commands)

│   │   │   └── scoala-gimnaziala/  - [Configuration](#configuration)

│   │   └── post/           # ← Add news articles here  - [Deploy](#deploy)

│   ├── pages/              # Page templates- [Frequently Asked Questions](#frequently-asked-questions)

│   ├── components/         # UI components- [Related Projects](#related-projects)

│   ├── layouts/            # Layouts- [Contributing](#contributing)

│   ├── navigation.ts       # Menu configuration- [Acknowledgements](#acknowledgements)

│   └── config.yaml         # Site settings- [License](#license)

├── public/

│   └── images/             # ← Add your images here</details>

│       ├── acasa/

│       ├── gradinita/<br>

│       ├── scoala-primara/

│       └── scoala-gimnaziala/## Demo

└── Documentation files (*.md)

```📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)



## 🎯 Website Sections<br>



### ACASĂ (Home)## 🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!

- Scurt istoric

- Echipa noastrăWe're embarking on an exciting journey with **AstroWind 2.0**, and we want you to be a part of it! We're currently taking the first steps in developing this new version and your insights are invaluable. Join the discussion and share your feedback, ideas, and suggestions to help shape the future of **AstroWind**. Let's make **AstroWind 2.0** even better, together!



### GRĂDINIȚĂ (Kindergarten)[Share Your Feedback in Our Discussion!](https://github.com/arthelokyo/astrowind/discussions/392)

- Metoda pedagogică

- Echipa noastră<br>

- Noutăți

- Galerie foto## TL;DR

- Înscrieri

- Informații utile (Q&A)```shell

npm create astro@latest -- --template arthelokyo/astrowind

### ȘCOALĂ PRIMARĂ (Primary School)```

- Metoda pedagogică

- Echipa noastră## Getting started

- Noutăți

- Galerie foto**AstroWind** tries to give you quick access to creating a website using [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

- Înscrieri

- Informații utile (Q&A)Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.



### ȘCOALĂ GIMNAZIALĂ (Middle School)In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

- Metoda pedagogică

- Echipa noastră### Project structure

- Noutăți

- Galerie fotoInside **AstroWind** template, you'll see the following folders and files:

- Înscrieri

- Informații utile (Q&A)```

/

## ✅ Setup Status├── public/

│   ├── _headers

- [x] Astro + AstroWind project initialized│   └── robots.txt

- [x] 20 content template files created├── src/

- [x] Navigation structure configured│   ├── assets/

- [x] Image directories organized│   │   ├── favicons/

- [x] Site configuration updated│   │   ├── images/

- [x] Documentation written│   │   └── styles/

- [ ] Content added (your turn!)│   │       └── tailwind.css

- [ ] Images uploaded (your turn!)│   ├── components/

- [ ] Homepage customized│   │   ├── blog/

- [ ] Deployed to Netlify│   │   ├── common/

│   │   ├── ui/

## 🛠️ Built With│   │   ├── widgets/

│   │   │   ├── Header.astro

- **[Astro](https://astro.build)** - Modern web framework│   │   │   └── ...

- **[AstroWind](https://github.com/onwidget/astrowind)** - Beautiful theme│   │   ├── CustomStyles.astro

- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS│   │   ├── Favicons.astro

- **[Markdown](https://www.markdownguide.org/)** - Content format│   │   └── Logo.astro

- **[GitHub](https://github.com)** - Version control│   ├── content/

- **[Netlify](https://netlify.com)** - Hosting & deployment│   │   ├── post/

│   │   │   ├── post-slug-1.md

## 📝 Content Management│   │   │   ├── post-slug-2.mdx

│   │   │   └── ...

### Edit a Page│   │   └-- config.ts

│   ├── layouts/

1. Open file: `src/data/pages/[section]/[subsection].md`│   │   ├── Layout.astro

2. Edit content below the `---`│   │   ├── MarkdownLayout.astro

3. Save file│   │   └── PageLayout.astro

4. View at `http://localhost:4321`│   ├── pages/

│   │   ├── [...blog]/

### Add Images│   │   │   ├── [category]/

│   │   │   ├── [tag]/

1. Place in: `public/images/[section]/`│   │   │   ├── [...page].astro

2. Reference: `/images/[section]/filename.jpg`│   │   │   └── index.astro

3. Update in markdown frontmatter│   │   ├── index.astro

│   │   ├── 404.astro

### Create News Article│   │   ├-- rss.xml.ts

│   │   └── ...

1. Create: `src/data/post/YYYY-MM-DD-title.md`│   ├── utils/

2. Add category: `category: 'gradinita'`│   ├── config.yaml

3. Write content│   └── navigation.js

4. Save and publish├── package.json

├── astro.config.ts

## 🚀 Deployment└── ...

````

### To GitHub

```bashAstro looks for `.astro`or`.md`files in the`src/pages/` directory. Each page is exposed as a route based on its file name.

git init

git add .There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

git commit -m "Initial commit"

git remote add origin YOUR-REPO-URLAny static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

git push -u origin main

````[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/arthelokyo/astrowind/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/arthelokyo/astrowind) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/arthelokyo/astrowind)



### To Netlify> 🧑‍🚀 **Seasoned astronaut?** Delete this file `README.md`. Update `src/config.yaml` and contents. Have fun!

1. Connect GitHub repository

2. Configure build:<br>

   - **Build command:** `npm run build`

   - **Publish directory:** `dist`### Commands

3. Deploy!

All commands are run from the root of the project, from a terminal:

**Details:** See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)

| Command             | Action                                             |

## 🎨 Customization| :------------------ | :------------------------------------------------- |

| `npm install`       | Installs dependencies                              |

### Update Site Name| `npm run dev`       | Starts local dev server at `localhost:4321`        |

Edit `src/config.yaml`:| `npm run build`     | Build your production site to `./dist/`            |

```yaml| `npm run preview`   | Preview your build locally, before deploying       |

site:| `npm run check`     | Check your project for errors                      |

  name: Școala Teofil| `npm run fix`       | Run Eslint and format codes with Prettier          |

  site: 'https://scoalateofil.ro'| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

````

<br>

### Change Navigation

Edit `src/navigation.ts`### Configuration

### Customize ColorsBasic configuration file: `./src/config.yaml`

Edit `tailwind.config.js`

```yaml

### Update Homepagesite:

Edit `src/pages/index.astro`  name: 'Example'

  site: 'https://example.com'

## 📊 Key Features  base: '/' # Change this if you need to deploy to Github Pages, for example

  trailingSlash: false # Generate permalinks with or without "/" at the end

- ✅ Fast & SEO-optimized (Astro SSG)

- ✅ Fully responsive design  googleSiteVerificationId: false # Or some value,

- ✅ Romanian language support

- ✅ Easy content management (Markdown)# Default SEO metadata

- ✅ Image galleriesmetadata:

- ✅ Blog/news section  title:

- ✅ Contact forms (Netlify Forms)    default: 'Example'

- ✅ Automatic deployment    template: '%s — Example'

- ✅ Free hosting (Netlify)  description: 'This is the default meta description of Example website'

- ✅ SSL certificate included  robots:

    index: true

## 🔧 Development Commands    follow: true

  openGraph:

| Command | Description |    site_name: 'Example'

|---------|-------------|    images:

| `npm run dev` | Start dev server (port 4321) |      - url: '~/assets/images/default.png'

| `npm run build` | Build for production |        width: 1200

| `npm run preview` | Preview production build |        height: 628

| `npm run check` | Check for errors |    type: website

| `npm run fix` | Auto-fix formatting |  twitter:

    handle: '@twitter_user'

## 📞 Support & Resources    site: '@twitter_user'

    cardType: summary_large_image

- **Astro Docs:** https://docs.astro.build

- **AstroWind GitHub:** https://github.com/onwidget/astrowindi18n:

- **Tailwind CSS:** https://tailwindcss.com/docs  language: en

- **Markdown Guide:** https://www.markdownguide.org  textDirection: ltr

- **Netlify Docs:** https://docs.netlify.com

apps:

## 🤝 Contributing  blog:

    isEnabled: true # If the blog will be enabled

This is a private project for Școala Teofil. For content updates:    postsPerPage: 6 # Number of posts per page



1. Edit markdown files in `src/data/pages/`    post:

2. Test locally with `npm run dev`      isEnabled: true

3. Commit changes: `git commit -m "Your message"`      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%

4. Push: `git push`      robots:

5. Netlify auto-deploys!        index: true



## 📄 License    list:

      isEnabled: true

Based on AstroWind theme. See LICENSE.md for details.      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)

      robots:

## 👥 Team        index: true



**Școala Teofil** - Making education accessible and engaging    category:

      isEnabled: true

## 🎉 Get Started      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)

      robots:

**New here?** → Read [START_HERE.md](START_HERE.md)        index: true



**Ready to edit?** → Read [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md)    tag:

      isEnabled: true

**Ready to launch?** → Read [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)

      robots:

---        index: false



Built with ❤️ for Școala Teofil    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post

    relatedPostsCount: 4 # Number of related posts to display

_Original AstroWind README available in [README_ASTROWIND.md](README_ASTROWIND.md)_

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arthelokyo/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farthelokyo%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by **Arthelokyo** and maintained by a community of [contributors](https://github.com/arthelokyo/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
