# Pradipta Das Sarkar — Portfolio

Static Astro portfolio with MDX case studies.

## Local development

```sh
npm install
npm run dev
```

## Content

Case studies live in `src/content/work`. Add a new MDX file using the same frontmatter schema; the dynamic route builds it automatically.

## Production checks

```sh
npm run check
npm run build
```

## Cloudflare Pages

1. Push the repository to GitHub or GitLab.
2. In Cloudflare Workers & Pages, import the repository.
3. Use build command `npm run build` and output directory `dist`.
4. Set the production branch and enable preview deployments.
5. Add the apex domain in **Custom domains**, then add `www` and retain the redirect in `public/_redirects`.
6. Cloudflare provisions HTTPS automatically after DNS becomes active.

The site does not require environment variables, a database, or server-side runtime.

## Pre-launch review

- Replace the placeholder canonical domain in `astro.config.mjs` if needed.
- Confirm every Cisco/customer statement is approved for public disclosure.
- Confirm the email, LinkedIn URL and résumé are current.
- Run keyboard, responsive, reduced-motion and Lighthouse checks.
