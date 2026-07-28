# Do More ATL Portfolio

React + Vite + Tailwind CSS portfolio site for **domoreatl.com**.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite, normally:

```text
http://localhost:5173
```

## Test the production build

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Push or merge the files into the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. Open the **Actions** tab and allow the `Deploy Do More ATL to GitHub Pages` workflow to finish.
7. In **Settings → Pages**, enter `domoreatl.com` as the custom domain.
8. Update the domain's DNS records using the values GitHub provides.
9. Enable **Enforce HTTPS** after GitHub verifies the domain.

The workflow builds the site with Vite and deploys the generated `dist` folder automatically after every push to `main`.

## Important files

- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `public/CNAME` — preserves the `domoreatl.com` custom domain during builds
- `vite.config.js` — uses `/` because the final site is served from the root custom domain

## Links to update

In `src/App.jsx`, replace any placeholder `#` links for SwipeTheVote and Perfect 5 with their live URLs when they are ready.

## Revised compact design plan

- **Header:** serious Do More monogram, compact navigation, and one Explore Apps action.
- **Hero:** reduced vertical height, one focused headline, short supporting copy, and two actions.
- **Project index:** compact three-card jump menu for Gridded, SwipeTheVote, and Perfect 5.
- **Project showcases:** dense two-column cards with concise copy, four feature chips, and a layered three-screen preview.
- **About:** brief studio statement, service tiles, and the playful red/blue logo used as a secondary brand accent.
- **Contact:** single compact call-to-action block.
- **Brand system:** serious dark monogram is the primary logo; playful red/blue artwork is a secondary studio mark.
