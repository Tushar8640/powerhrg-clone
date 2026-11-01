# Image assets

Images come from the reference pages saved with "Save page as" (C:\Users\imran\Downloads\*Power Home Remodeling*).
File names were matched to the live page DOM, so each image sits where it does on powerhrg.com.
These images, logos and badges belong to their owners - keep this project local, for study only.

## Still missing

Save each file from the live page (right-click -> Save image as, or DevTools -> Network -> Img), rename it
to the "Save as" name and drop it into this folder. Until then the slot shows a plain colour block.

| Save as (in public/assets) | File name on powerhrg.com | Page / section |
|---|---|---|
| home/hero.png | homepage_hero_desktop.png | Home hero (desktop). Mobile image is used as fallback until then |
| people/about.jpg | Rectangle-130.jpg | Home - "Power is our people" About card |
| carousel/windows.jpg | Window-01.jpg | Services carousel (home + /services) |
| carousel/roofing.jpg | ROOFING.jpg | Services carousel |
| carousel/siding.jpg | SIDING.jpg | Services carousel |
| carousel/doors.jpg | Door-01.jpg | Services carousel |
| carousel/accessories.jpg | ACCESSORIES.jpg | Services carousel |
| services-page/hero.png | 4096-2731-max-41-2.png | /services hero (desktop) |
| services-page/hero-mobile.jpg | all-services-m-1.jpg | /services hero (mobile) |
| services-page/same-address.png | 4096-2731-max-41-1.png | /services "Same address, whole new vibe" |
| services-page/before.png, after.png | Rectangle-115.png, Rectangle-130.png | /services "Our work shows" slider (check which one is the old house) |
| services-page/licenses.jpg | LICENSE-AND-INURANCE.jpg | /services "Reasons to relax" - Licenses |
| services-page/warranties.jpg | page-link-warranties.jpg | /services "Reasons to relax" - Warranties |
| services-page/project-pulse.jpg | (Vimeo video, no image file) | "Track your project" phone - optional still image |
| windows/hero.png | WINDOWS.png | /services/windows hero (desktop). Mobile image is the fallback |
| siding/before.png | Rectangle-137.png | /services/siding before/after slider |
| doors/before.png | Rectangle-131.png | /services/doors before/after slider |

## In place

| Folder | Contents | Source file names |
|---|---|---|
| logo/ | power-white.svg, power-navy.svg (header), power-lime.svg (footer), pledge1.svg | inline SVGs saved as "default (20/21/…).svg" |
| social/ | youtube, linkedin, instagram, tiktok, facebook (.svg) | footer social icons |
| icons/ | feature icons (ENERGY.svg, SECURE.svg … REFLECTIVE.png) | same names on the reference |
| awards/ | angi.png, bbb.png, google.svg, bobvila.png, energy.svg | SSA-2025_800px.png, webnus-bbb-share-p.png, Google.svg, 2025-bob-vila-editors-choice-award2.png, Energy-Savings.svg |
| footer/ | angi, bbb, bobvila, best-place-to-work, top-100 (.jpg) | angi-super-service-2025, bbb-a-plus-rating, bobvila_logo, glassdoor-best-places-to-work, fortune-100 |
| shared/ | guarantee.jpg, pulse-bg.png, pulse-logo.png | Rectangle-109.jpg, Screenshot-2023-06-07-at-8.59-1-1.png, pulse-logo.png |
| home/ | hero-mobile.jpg | homepage_hero_mobile.jpg |
| people/ | careers.jpg | Rectangle-5.jpg |
| carousel/ | insulation.jpg | INSULATION.jpg |
| services-page/partners/ | gaf, pella, promaterials, provia, westlake, certainteed (.svg) | partner_*.svg, patern_pella.svg, Certainteed_logo_Pantone.svg |
| windows/ | hero-mobile.png, before.jpg, after.jpg | WINDOWS-M-2.png, Window-Before.jpg, Window-After.jpg |
| roofing/ | hero.png, hero-mobile.png, gaf-logo.png, gaf-premium-badge.svg, before.png, after.png, swatches/*.png | ROOFING-D-1, ROOFING-M, gaf-logo-svg, Premium-System-Professional-1, Rectangle-135/136, Shingles_* |
| siding/ | hero.jpg, hero-mobile.jpg, after.png | siding-D, siding-M, Rectangle-138 |
| doors/ | hero.png, after.png | DOORS-D.png, Rectangle-132.png |
| insulation/ | hero.jpg, hero-mobile.jpg, gallery/1-7.jpg | insulation-D/M; gallery in DOM order: TPA_…9254, 9258, 9259, INSULATION, CHI_…024, 049, 057 |
| accessories/ | hero.jpg, hero-mobile.jpg, window/1-4, door/1-8, siding/1-6, roofing/1-4 | Accessories-D/M; galleries in DOM order (see src/lib/accessories-content.ts) |

## /about, /about/community, /about/belonging, /about/news

All in place from the "Save page as" zips. Each path in src/lib/about-content.ts, community-content.ts,
belonging-content.ts and news-content.ts has the original file name in a comment next to it.

- Still missing: community/video-poster.jpg - the reference plays a Vimeo video there (optional still image).
- Extra from the zips: community/pledge1-band.svg (white Pledge 1% mark) and community/open-file-icon.png.
