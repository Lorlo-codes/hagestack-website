# HageStack website

Next.js 14 (App Router) site. Application code lives in **`apps/web`**.

## Local development

From the repository root:

```bash
npm ci --prefix apps/web
npm run dev
```

Or work inside the app folder: `cd apps/web && npm install && npm run dev`.

## Vercel

The repo supports either setup:

| Vercel **Root Directory** | What happens |
|---------------------------|----------------|
| *(empty — repository root)* | Root `vercel.json` runs `npm ci` and `npm run build` in `apps/web`. |
| **`apps/web`** | Default install/build run in that folder (same as local `apps/web`). |

If you previously saw **“Root Directory apps/web does not exist”**, pull this branch: the **`apps/web`** folder is now in the repo.

Set **`NEXT_PUBLIC_SITE_URL`** to your live URL (for example `https://www.hagestack.com`). Host-only values like `www.hagestack.com` are normalized at build time.

## Scripts (from repo root)

`npm run dev`, `build`, `start`, `lint`, `typecheck` delegate to `apps/web`.

## TypeScript / editor

The app’s `tsconfig.json` is under **`apps/web`**. The repo root **`tsconfig.json`** only lists a [project reference](https://www.typescriptlang.org/docs/handbook/project-references.html) to `apps/web` so the workspace resolves correctly when you open the repository folder.

If the IDE still shows red squiggles on `tsconfig` or missing `.next/types` files, run **`npm run build --prefix apps/web`** once (or `npm run dev` in that folder), then **Developer: Reload Window** so generated Next types exist and the language service picks them up.

## Base44 (optional)

If you embed a Base44 app, set the `NEXT_PUBLIC_*` variables from the Base44 dashboard. For a static marketing site only, you can leave them unset.
