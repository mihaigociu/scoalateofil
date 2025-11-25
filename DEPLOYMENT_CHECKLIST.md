# Deployment Checklist for Școala Teofil Website

## 🎯 Pre-Deployment Tasks

### Content
- [ ] All page content is filled in (replace placeholder text)
- [ ] School history (`acasa/scurt-istoric.md`) is complete
- [ ] Team information for all sections is added
- [ ] Educational methods for each level are described
- [ ] Q&A sections have real answers
- [ ] Enrollment information is accurate and up-to-date
- [ ] Contact information is correct

### Images
- [ ] School logo added and replaced favicon
- [ ] Hero images for all main pages
- [ ] Team photos uploaded
- [ ] Gallery photos organized by section
- [ ] All images are optimized (compressed)
- [ ] Image alt text is descriptive

### Configuration
- [ ] Site name updated in `src/config.yaml` ✅ (Done)
- [ ] Site URL updated (when you have domain)
- [ ] Language set to Romanian ✅ (Done)
- [ ] Navigation menu configured ✅ (Done)
- [ ] Footer information updated ✅ (Done)
- [ ] Google Analytics ID added (optional)
- [ ] Social media links added

### Technical
- [ ] Test site locally (`npm run dev`)
- [ ] No console errors
- [ ] All links work
- [ ] Images load correctly
- [ ] Mobile responsive check
- [ ] Run build command successfully (`npm run build`)

## 📦 GitHub Setup

### Step 1: Create GitHub Repository

```bash
# If not already initialized
cd /Users/2346263/projects/scoalateofil/new_site
git init
```

### Step 2: Create .gitignore (should already exist)

Verify `.gitignore` contains:
```
node_modules/
dist/
.env
.DS_Store
```

### Step 3: Initial Commit

```bash
git add .
git commit -m "Initial commit: Școala Teofil website"
```

### Step 4: Create GitHub Repo

1. Go to https://github.com/new
2. Repository name: `scoalateofil-website` (or your choice)
3. Description: "Official website for Școala Teofil"
4. Choose Public or Private
5. **Do NOT** initialize with README (you already have one)
6. Click "Create repository"

### Step 5: Connect and Push

```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/scoalateofil-website.git
git branch -M main
git push -u origin main
```

✅ **Checkpoint:** Verify code is on GitHub

## 🚀 Netlify Deployment

### Step 1: Sign in to Netlify

1. Go to https://app.netlify.com/
2. Sign in with your GitHub account (easiest)

### Step 2: Import Project

1. Click "Add new site" → "Import an existing project"
2. Click "GitHub"
3. Authorize Netlify to access your GitHub
4. Search for and select `scoalateofil-website`

### Step 3: Configure Build Settings

**Should auto-detect, but verify:**
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 or higher (can set in Environment variables)

Click "Deploy site"

### Step 4: Wait for Deployment

- First build takes 2-5 minutes
- Watch the deploy log for any errors
- ✅ Success! You'll get a URL like: `random-name-123.netlify.app`

### Step 5: Configure Site Name

1. Go to "Site settings" → "Site details"
2. Click "Change site name"
3. Enter: `scoalateofil` (or your preferred name)
4. Your site will be: `scoalateofil.netlify.app`

✅ **Checkpoint:** Site is live at Netlify URL

## 🌐 Custom Domain Setup (Optional)

### If you own scoalateofil.ro

#### On Netlify:

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Enter: `scoalateofil.ro`
4. Netlify will show you DNS records to add

#### On your Domain Registrar:

Add these DNS records (values from Netlify):

**Option A: Using Netlify DNS (Recommended)**
1. Change nameservers to Netlify's nameservers
2. Netlify manages everything

**Option B: Using Existing DNS**
1. Add A record: `@ → 75.2.60.5` (Netlify's IP)
2. Add CNAME: `www → scoalateofil.netlify.app`

**Wait 24-48 hours for DNS propagation**

#### Enable HTTPS:

1. After DNS is set up
2. Netlify automatically provisions SSL certificate
3. Force HTTPS redirect

✅ **Checkpoint:** Site accessible at your domain

## 🔒 Security & Performance

### Enable Security Headers

In `netlify.toml` (already configured):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### Enable Asset Optimization

In Netlify Dashboard:
1. Go to "Site settings" → "Build & deploy" → "Post processing"
2. Enable:
   - ✅ Bundle CSS
   - ✅ Minify CSS
   - ✅ Minify JS
   - ✅ Compress images

### Set up Notifications

1. Go to "Site settings" → "Build notifications"
2. Add email for deploy notifications
3. Optional: Slack/Discord webhooks

## 📊 Analytics & Monitoring

### Google Analytics (Optional)

1. Create GA4 property at https://analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to `src/config.yaml`:
   ```yaml
   analytics:
     vendors:
       googleAnalytics:
         id: 'G-XXXXXXXXXX'
   ```
4. Commit and push

### Netlify Analytics (Paid, Optional)

- Server-side analytics (no cookies, no GDPR issues)
- $9/month
- Go to "Analytics" in Netlify dashboard

## 🔄 Update Workflow

### Making Changes

```bash
# 1. Make changes to content/code
# 2. Test locally
npm run dev

# 3. Build to check for errors
npm run build

# 4. Commit and push
git add .
git commit -m "Description of changes"
git push

# 5. Netlify automatically deploys!
```

### Deploy Previews

- Every pull request gets a preview URL
- Test changes before merging to main
- Perfect for collaboration

## 📋 Post-Deployment Checklist

### Testing

- [ ] Visit site on desktop browser
- [ ] Visit site on mobile device
- [ ] Test all navigation links
- [ ] Test contact form (if added)
- [ ] Check all images load
- [ ] Verify text is readable
- [ ] Check for typos
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### SEO

- [ ] Submit sitemap to Google Search Console
  - URL: `https://scoalateofil.ro/sitemap-index.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Google site ownership
- [ ] Check meta descriptions
- [ ] Verify Open Graph images

### Social Media

- [ ] Update Facebook page with new website
- [ ] Update Instagram bio with website link
- [ ] Share announcement post
- [ ] Test social media preview cards

### Documentation

- [ ] Document login credentials (keep secure!)
- [ ] Share GitHub access with team (if needed)
- [ ] Share content editing guide with staff
- [ ] Create process for content updates

## 🆘 Troubleshooting

### Build Fails

**Check deploy log for errors:**
1. Go to Netlify dashboard → "Deploys"
2. Click failed deploy
3. Read error message

**Common issues:**
- Missing dependencies: Run `npm install`
- TypeScript errors: Run `npm run check`
- Build command wrong: Verify in build settings

### Site Not Updating

**Solutions:**
1. Check git push was successful
2. Check Netlify deploy status
3. Clear browser cache (Cmd+Shift+R)
4. Check if draft: true in frontmatter

### Domain Not Working

**Solutions:**
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Use DNS checker: https://dnschecker.org
4. Check domain registrar settings

## 📞 Support Resources

- **Netlify Status:** https://www.netlifystatus.com/
- **Netlify Community:** https://answers.netlify.com/
- **Astro Discord:** https://astro.build/chat
- **GitHub Issues:** Your repository issues tab

## 🎉 You're Live!

Congratulations! Your website is now live and accessible to the world.

**Don't forget to:**
- Announce the new website to parents
- Update school materials with new URL
- Monitor for feedback
- Plan regular content updates

---

**Good luck with the launch! 🚀**
