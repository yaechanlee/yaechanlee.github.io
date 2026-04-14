# Yaechan Lee — Academic Website

Built with React + Vite, deployed on GitHub Pages.

---

## Setup

### 1. Create a GitHub repository
Go to github.com and create a new repository named:
- `[your-username].github.io` → site will live at `https://[your-username].github.io`
- OR any name (e.g. `my-site`) → site will live at `https://[your-username].github.io/my-site`

### 2. Update homepage in package.json
Open `package.json` and replace the homepage field:
```
"homepage": "https://[YOUR-GITHUB-USERNAME].github.io"
```

If using a non-root repo name, also update `vite.config.js`:
```js
base: '/my-site/',   // replace with your repo name
```

### 3. Upload your CV
Place your CV PDF at:
```
public/cv.pdf
```
The Download CV button will link to it automatically.

### 4. Add your photo (optional)
Place a photo at `public/photo.jpg` and update App.jsx to display it.

### 5. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[your-username]/[repo-name].git
git push -u origin main
```

### 6. Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **GitHub Actions**
4. The site will build and deploy automatically on every push to `main`

---

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Manual Deploy (alternative to GitHub Actions)

```bash
npm run deploy
```

This builds the site and pushes to the `gh-pages` branch.

---

## Updating Content

All content is in `src/App.jsx`:
- **Bio** — edit the paragraph text in the HERO section
- **Publications** — edit the `PUBLICATIONS` array at the top
- **Links** — update Google Scholar, SSRN, Twitter, Email hrefs in the hero buttons
- **CV** — replace `public/cv.pdf` with your updated file
