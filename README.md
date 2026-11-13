# SOE Consultancy — GitHub Pages website

A responsive, professional recruitment and talent-sourcing website for SOE Consultancy.

## Included
- `index.html` — website content and page sections
- `styles.css` — responsive styling
- `script.js` — mobile navigation and enquiry form
- `config.js` — public SOE contact email setting
- `assets/background.mp4` — supplied video, used as a continuously looping, muted, blurred page background
- `assets/` — supplied SOE brand assets (original files copied without recolouring or editing)

## Important: upload the correct folder structure
Upload the **contents** of `SOE-Consultancy-GitHub` to the root of your GitHub repository. Do not upload only the ZIP, and do not put the files inside an extra nested folder.

Your repository root should look like this:

```text
index.html
styles.css
script.js
config.js
assets/
  background.mp4
  soe-logo-tagline-reversed.png
  favicon-32.png
  ...
```

The header and footer use the supplied original PNG logo to improve compatibility. The SVG and PNG logo kit files remain included unchanged.

## Before publishing
1. Open `config.js` and replace `ADD_OFFICIAL_SOE_EMAIL_HERE` with SOE's approved public contact email.
2. Confirm the Oracle specialisations and service descriptions with the business owner.
3. Add only verified company details, client names, testimonials, registrations, phone numbers and office addresses.

The enquiry form opens the visitor's email app with a prepared message (mailto). It does not store submissions in a database or send them silently. A backend or form service is required for direct submissions.

## GitHub Pages
1. Open the repository and select **Settings → Pages**.
2. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
3. Confirm the site root contains `index.html` and the `assets` folder.
4. Wait for GitHub Pages to finish publishing.

## Brand and content integrity
The supplied logo files are included byte-for-byte. No client partnership, legal registration, office address, contact information, testimonial or service guarantee has been invented.
