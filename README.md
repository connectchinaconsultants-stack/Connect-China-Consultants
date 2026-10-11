# Connect China Consultants website

Static HTML, CSS, and JavaScript site for an international education consultancy. There are five primary pages and **no separate university detail routes**. Every institution is a card on `universities.html`.

## Pages

| File | Route purpose |
| --- | --- |
| `index.html` | Home |
| `admission.html` | Admission Process |
| `degrees.html` | Degrees |
| `universities.html` | All university cards + comparison table |
| `contact.html` | Contact details and inquiry form |
| `privacy.html` | Draft privacy wording (replace before launch) |

## Local preview

Open the project folder and serve it over HTTP (recommended so paths and form scripts behave consistently):

```bash
# Python
python -m http.server 8080
```

Then visit `http://localhost:8080`.

You can also open `index.html` directly in a browser.

There is no build step and no npm install.

## Editing content

- **Universities, programs, contact, social placeholders:** `js/site-data.js`
- **Layout and design tokens:** `css/styles.css`
- **Navigation, carousel, expandable cards, form handoff:** `js/main.js`
- **Copy on each page:** the corresponding HTML file

Update one university object at a time. IDs (for example `jinggangshan`) are used for in-page anchors (`universities.html#uni-jinggangshan`) and `contact.html?university=jinggangshan`.

Names flagged for confirmation in the brief:

- Yichuan Medical University
- Yangtze Medical University
- Jiangxi Medical University
- Harbin Medical University (provisional spelling for “Herbin Medical University”)

Do not invent missing tuition, locations, scholarships, or recognition. Use `Contact us to confirm` until verified.

## Replacing images

All runtime images live in:

`public/assets/images/`

Keep the same filenames. Layouts use `<img>` elements (not CSS backgrounds). Suggested replacements:

- `main-logo.png`
- `horizontal-logo.png`
- `favicon-icon.png`
- `home-hero-image.jpg`
- `about-student-support.jpg`
- `program-mbbs.jpg`
- `program-nursing.jpg`
- `program-chinese-language.jpg`
- `university-*.jpg` (one file per university)
- `logo-*.png` (carousel tiles)
- `jinggangshan-poster-01.jpg`, `jinggangshan-poster-02.jpg`

Regenerate placeholders only if needed:

```bash
pip install Pillow
python scripts/generate_placeholders.py
```

## Contact form

Email delivery is **not** configured. After validation, the form prepares a message and offers:

1. WhatsApp: `https://wa.me/8615507960969`
2. `mailto:connect.chinaconsultants@gmail.com`

The UI does not claim that a message was delivered until the visitor sends it.

To add real email later, use a server-side or hosted form endpoint (for example Formspree, Netlify Forms, or your own API). Do not put SMTP passwords or API keys in `js/`. A honeypot field named `website` is included as lightweight spam protection.

## SEO and production domain

- Unique titles and meta descriptions are set on each main page.
- When the production domain is known, add absolute canonical URLs and update `sitemap.xml` and `robots.txt`.
- Structured data is omitted until business details are verified.

## Deployment

Upload the entire folder (HTML, `css/`, `js/`, `public/`, `robots.txt`, `sitemap.xml`) to any static host: GitHub Pages, Netlify, Cloudflare Pages, or a conventional web server.

## Verify before publication

- WHO, ECFMG, PMDC/PMC, and other recognition claims
- Licensing exam eligibility
- Partnership and MOE wording
- Admission-guarantee language
- Tuition and accommodation figures
- Official university names and program lists
- Social and WeChat destinations
- Privacy policy text
