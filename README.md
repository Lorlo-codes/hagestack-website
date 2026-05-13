# HageStack website

Next.js 14 (App Router). From the repo root: `npm ci`, then `npm run dev` or `npm run build`.

## Vercel

- **Root Directory** in Project → Settings → **Build and Deployment** must be **empty** (repository root). If it still says `apps/web`, clear it — that folder no longer exists in this repo and the build will fail.
- Optional env: `NEXT_PUBLIC_SITE_URL` = your live site URL (e.g. `https://www.hagestack.com`).
- Node: use **20.x** on Vercel if offered (this repo includes `.nvmrc` with `20`).

Optional Base44: set `NEXT_PUBLIC_*` from the Base44 dashboard if you use that integration.

## Contact form → `info@hagestack.com`

Uses [Resend](https://resend.com). In Vercel (or `.env.local`):

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | API key from Resend |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `HageStack <contact@hagestack.com>` (domain must be verified in Resend) |
| `CONTACT_TO_EMAIL` | Optional; defaults to **`info@hagestack.com`** |

Without these, the API returns 503 and the form shows a configuration message.
