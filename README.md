# HageStack website

Next.js 14 (App Router). From the repo root: `npm ci`, then `npm run dev` or `npm run build`.

## Vercel

- **Root Directory** in Project → Settings → **Build and Deployment** must be **empty** (repository root). If it still says `apps/web`, clear it — that folder no longer exists in this repo and the build will fail.
- Optional env: `NEXT_PUBLIC_SITE_URL` = your live site URL (e.g. `https://www.hagestack.com`).
- Node: use **20.x** on Vercel if offered (this repo includes `.nvmrc` with `20`).

Optional Base44: set `NEXT_PUBLIC_*` from the Base44 dashboard if you use that integration.

## Contact form

Submissions go to **info@hagestack.com** via [FormSubmit](https://formsubmit.co) (no API keys or env vars). The first time someone uses a new address, FormSubmit may email **info@hagestack.com** a one-time activation link—click it once, then the form works normally.
