DO MORE ATL — GITHUB PAGES OVERWRITES

Copy these files into your repository, preserving the folders:

1. vite.config.js
   Replace the existing file in the project root.

2. src/App.jsx
   Replace the existing src/App.jsx file.

IMPORTANT FOR TODAY'S TESTING

Delete public/CNAME for now, because domoreatl.com is not connected yet.
You can do that in Terminal from the project folder:

  rm public/CNAME

After domoreatl.com is configured in GitHub Pages and its DNS is pointed to GitHub,
create public/CNAME again with exactly this one line:

  domoreatl.com

The new Vite setting uses base: './', so it works at both the temporary repository URL
and the future custom domain without another code change.

After copying the files:

  npm run build
  git add vite.config.js src/App.jsx public/CNAME
  git commit -m "Fix GitHub Pages asset paths"
  git push origin main

If public/CNAME has already been deleted, Git may show it as a deleted file. That is correct.
Wait for the GitHub Actions deployment to finish, then hard-refresh the page.
