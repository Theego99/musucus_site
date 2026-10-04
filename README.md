# musucus

An independent, bilingual brand website for musucus handmade rugs. Static HTML, CSS and JavaScript, published with GitHub Pages. The existing BASE shop handles product availability, prices, orders, payment, shipping and seller policies.

## Pages

- `index.html`: brand introduction, collection with size filters, studio story.
- `custom.html`: custom-order process and a browser-only enquiry note builder. No form submission or personal-data storage occurs here.
- `care.html`: care guide with links to the full current BASE guidance.

Japanese is the default. The language switch saves only the language preference in local storage, when supported. Navigation and shopping links still work without JavaScript.

## Editing and publishing

Edit the HTML, CSS or JavaScript, commit and push to `main`. GitHub Pages publishes the root of `main`. No build service or paid package is required. All paths work under the GitHub Pages project subdirectory.

The site intentionally does not duplicate changing prices or stock levels. Product names, dimensions and photographs are a curated snapshot; update them when the collection changes. All purchase links go directly to the official product on BASE.

## Brand assets and sources

The original musucus illustrated-hands logo and rug photographs come from the owner's existing public shop, https://musucus.base.shop/, collected on 2026-10-04 for this authorized website build. `assets/` contains optimized WebP derivatives. Product IDs match the original BASE listing IDs. No generated product photography is used.

Custom-order copy follows https://musucus.base.shop/p/00002. Care copy summarizes https://musucus.base.shop/p/00001. Current policies remain on BASE; this site does not create new production guarantees, cancellation rules or prices.

## Custom domain

GitHub Pages is the initial host. `musucus.com` is not configured here yet. When DNS access is available, set the custom domain in the repository Pages settings, follow GitHub's current DNS instructions at Onamae, then enable HTTPS. Update canonical, Open Graph and sitemap URLs at the same time. Keep BASE purchase links unchanged.

## Verification

Check mobile and desktop layouts, EN/JP switching, size filters, enquiry preparation and copy fallback, care accordions, and BASE destinations after changes. No payment or order is submitted during testing.
