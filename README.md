# Open 3D City Model Catalog — website

The website for the **Open 3D City Model Catalog**: a [STAC](https://stacspec.org/) extension for 3D city
models (CityJSON, CityGML) and an open, community-curated registry of 3D city models from around the world.

The registry data and STAC extension live in a separate repo:
**[cityjson/city3d-stac-registry](https://github.com/cityjson/city3d-stac-registry)**. Anyone can contribute
a dataset by opening a pull request there. This repo is the website that introduces the project and
encourages contributions.

## Stack

- **[Astro 6](https://astro.build/)** — static site generator (output is fully static HTML)
- **React 19** — interactivity via Astro islands (`client:*` directives)
- **TypeScript**
- **Tailwind CSS v4** + **[shadcn/ui](https://ui.shadcn.com/)** — styling and components
- **[Oxlint](https://oxc.rs/) + [Oxfmt](https://oxc.rs/)** — linting and formatting (the Oxc toolchain)
- **pnpm** — package manager

## Getting started

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

## Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `pnpm dev`      | Start the dev server                                |
| `pnpm build`    | Build the static site to `dist/`                    |
| `pnpm preview`  | Preview the production build locally                |
| `pnpm check`    | Type-check `.astro`/`.ts` files (`astro check`)     |
| `pnpm lint`     | Lint with Oxlint (`pnpm lint:fix` to autofix)       |
| `pnpm format`   | Format with Oxfmt (`pnpm format:check` to verify)   |
| `pnpm validate` | Run format check + lint + type-check (what CI runs) |

Add a shadcn component with `pnpm dlx shadcn@latest add <component>`.

See [`CLAUDE.md`](./CLAUDE.md) for architecture notes and conventions.
