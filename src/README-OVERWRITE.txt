DO MORE ATL — Layered Screenshots + Contact Form Overwrites

Copy the included src folder into the root of your DO-MORE-Website project.
Allow it to merge with and overwrite the existing src folder.

Files included:
- src/App.jsx
- src/components/ProjectShowcase.jsx
- src/components/ContactForm.jsx
- src/contactConfig.js
- src/styles.css

What changed:
- Restores the previous layered screenshot presentation.
- Keeps the newer mobile-safe spacing, typography, and overflow fixes.
- Adds a responsive contact form.
- The form works immediately by opening the visitor's email app.
- You can optionally connect Formspree for in-page submissions.

OPTIONAL FORMSPREE SETUP
1. Create a form at Formspree.
2. Copy the endpoint, such as:
   https://formspree.io/f/abcdwxyz
3. Open src/contactConfig.js.
4. Paste the endpoint between the quotes in CONTACT_FORM_ENDPOINT.

DEPLOY
npm run build

git add src
git commit -m "Restore layered previews and add contact form"
git push origin main

Your vite.config.js, GitHub workflow, custom domain, and images are not changed.


FORMSPREE CONNECTED
Endpoint:
https://formspree.io/f/mvzelwgg

The contact form will now submit directly through Formspree.
