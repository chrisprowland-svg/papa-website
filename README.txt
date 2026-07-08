PA PA final editable landing site

This is the clean static build for Cloudflare Pages.

Files:
- index.html
- styles.css
- script.js
- assets/

No contact form.
No mailto links.
No backend.
No Shopify.
No Klaviyo.

How to edit image crops/sizes:
1. Open styles.css in Notepad++.
2. Find the section called EDITABLE IMAGE CONTROLS.
3. Change only the values there first.

Most common edits:

Hero crop:
.hero {
  background-size: cover;
  background-position: 50% 50%;
}

Move hero left/right:
background-position: 45% 50%;
background-position: 55% 50%;

Product bottle size:
.wine-section {
  --bottle-height: 820px;
}

Make bottles larger:
--bottle-height: 900px;

Make bottles smaller:
--bottle-height: 740px;

Important:
Bottle images should never be given a fixed width and height together.
Use height only and leave width:auto to avoid distortion.

Upload:
Cloudflare Pages > Drag and drop > upload this folder or ZIP.


Mobile fix added: wine copy wraps properly and bottles centre on mobile.


Cropped bottle PNG transparent whitespace so mobile bottle sizing works properly.
