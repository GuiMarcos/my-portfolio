# My Portfolio

[![Deploy to guimarcos.github.io](https://github.com/GuiMarcos/my-portfolio/actions/workflows/deploy-user-page.yml/badge.svg?branch=master)](https://github.com/GuiMarcos/my-portfolio/actions/workflows/deploy-user-page.yml)

Portfolio built with Angular 21.

Live URL: `https://guimarcos.github.io`

## Stack

- Angular 21
- TypeScript
- SCSS
- pnpm
- Vitest

## Local Setup

1. Install dependencies:

```bash
pnpm install
```

2. Create the local environment file:

```ts
// src/environments/environment.local.ts
export const environment = {
	contactForm: {
		formspreeEndpoint: 'https://formspree.io/f/your-form-id',
	},
};
```

3. Start development server:

```bash
pnpm start
```

App runs at `http://localhost:4200/`.

## Environment Strategy

- `src/environments/environment.ts`: tracked file with safe defaults.
- `src/environments/environment.local.ts`: local/secret values (gitignored).
- Production build uses file replacement from `environment.ts` to `environment.local.ts`.

## Scripts

```bash
pnpm start
pnpm build
pnpm test
pnpm lint
```

## Build

- Production (default config):

```bash
pnpm build
```

- Development config:

```bash
pnpm build -- --configuration development
```

## Deploy (Cross-Repo GitHub Pages)

This repository deploys to `guimarcos/guimarcos.github.io` via:

- `.github/workflows/deploy-user-page.yml`

### Required Secrets (in `GuiMarcos/my-portfolio`)

- `GH_PAGES_PAT`: Fine-grained PAT with `Contents: Read and write` on `guimarcos.github.io`.
- `FORMSPREE_ENDPOINT`: Formspree endpoint used during CI build.

### Trigger

- Push to `main`, or run workflow manually in `Actions`.

### Output

- Angular build output from `dist/my-portfolio/browser` is published to `guimarcos.github.io` branch `main`.
- `404.html` is generated from `index.html` for SPA fallback.

## Useful Links

- Angular CLI docs: `https://angular.dev/tools/cli`
- ngx-toastr: `https://github.com/scttcper/ngx-toastr`
- lucide-angular: `https://lucide.dev/guide/packages/lucide-angular`
- scss-reset: `https://github.com/frontend-layers/scss-reset`
