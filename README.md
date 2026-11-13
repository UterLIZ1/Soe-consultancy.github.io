# SOE Consultancy — GitHub website

A responsive static website for SOE Consultancy, based on the business process shared by the owner:
- MNC/client shares a hiring requirement with SOE.
- SOE looks for candidates with matching skills and experience.
- SOE discusses the role and salary expectations with candidates.
- With candidate agreement, SOE submits the profile to the client.
- The client conducts its interview and selection process.
- If selected, payment and commercial arrangements follow the agreement between the relevant parties.

## Brand assets
The supplied SOE logo kit is included in `assets/` exactly as provided. The SVG and PNG logos are not redrawn, recoloured or edited. The site uses `soe-logo-tagline-reversed.svg` for the dark header/footer and the supplied favicon.

## Files
- `index.html` — all website content and sections
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and enquiry form
- `config.js` — public SOE contact email setting
- `assets/background.mp4` — video supplied for the site background
- `assets/` — original SOE brand kit

## Before publishing
1. Open `config.js`.
2. Replace `ADD_OFFICIAL_SOE_EMAIL_HERE` with the public business email approved by SOE.
3. Confirm the service descriptions and Oracle specialisations with the business owner before launch.
4. Add only verified company details (phone, address, legal entity details, client logos, testimonials) if SOE wants them displayed.

The enquiry form uses the visitor's email app (mailto). It does not store submissions in a database or send them silently. A backend or form service would be needed for database storage and direct submission.

## Publish on GitHub Pages
1. Create a GitHub repository, e.g. `soe-consultancy`.
2. Upload all files and folders from this ZIP to the repository root. `index.html` must be at the root.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Connect your domain
In **Settings → Pages → Custom domain**, enter the exact domain SOE owns. Then configure DNS at the domain registrar using the exact records GitHub Pages displays. Enable HTTPS once GitHub says the certificate is ready.

## Important content note
The site deliberately does not invent SOE's email, phone, office address, legal registration, named MNC partnerships, guarantees, or exact Oracle product specialisations. Confirm those details with the business owner before adding them.
