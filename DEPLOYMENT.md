# Ginja App – Vercel Deployment

This project is deployed on **Vercel**. The app is a static Next.js export (no server-side rendering or API routes in this repo).

> **Required:** In Vercel → **Project Settings → General**, set **Root Directory** to **`frontend`**. If this is not set, you will get "No Next.js version detected".

## Quick deploy

1. **Connect the repo**  
   In [Vercel](https://vercel.com), import your Git repository.  
   **Set the Root Directory to `frontend`** (Project Settings → General → Root Directory).

2. **Environment variables**  
   In the Vercel project → **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` – your Supabase project URL  
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` – your Supabase anon/public key  

3. **Deploy**  
   Push to the connected branch (e.g. `main`). Vercel will run `npm run build` in `frontend` and deploy the `out` directory.

4. **Custom domain (ginjaapp.com)**  
   In Vercel → **Settings → Domains**, add `ginjaapp.com` and `www.ginjaapp.com`.  
   In your domain registrar (e.g. GoDaddy), set:
   - **A record** for `ginjaapp.com` → Vercel’s target (or use the CNAME Vercel shows).  
   - **CNAME** for `www` → `cname.vercel-dns.com` (or the value Vercel gives).  
   Vercel will provision SSL for the domain.

## Project layout (relevant to deploy)

```
app/
├── frontend/           # ← Vercel Root Directory
│   ├── .env.local      # Local only; use Vercel env vars in production
│   ├── .env.example    # Template for required env vars
│   ├── vercel.json     # Vercel config (framework: nextjs)
│   ├── next.config.js # Static export, trailingSlash
│   ├── out/            # Build output (generated)
│   ├── pages/
│   ├── component/
│   └── public/         # Static assets (e.g. logo at public/logo/Ginja.png)
├── DEPLOYMENT.md       # This file
└── ...
```

## Build and env

- **Build**: `npm run build` (run from `frontend/`). Next.js is configured with `output: 'export'`, so the result is in `frontend/out/`.
- **Env**: Only `NEXT_PUBLIC_*` variables are needed; set them in the Vercel dashboard for Production/Preview as needed.

## Static assets (logo)

The app expects the logo at **`/logo/Ginja.png`**. In Next.js that means the file must be at **`frontend/public/logo/Ginja.png`**. Ensure that path exists and is committed (or add the logo there if missing).

## Local development and testing

- From repo root: `./test_local.sh dev` (starts dev server from `frontend/`).  
- Or from `frontend/`: `npm run dev`.  
- Build locally: `./test_local.sh build` or `cd frontend && npm run build`.

## Troubleshooting

- **"No Next.js version detected"**  
  Set **Root Directory** to **`frontend`** in Vercel (Project Settings → General). The app lives in `frontend/`; building from the repo root will fail.

- **Build fails on Vercel**  
  Check the build log; ensure **Root Directory** is `frontend` and that `npm run build` runs there. Fix any missing env vars or dependency errors.

- **Waitlist form not saving**  
  Confirm `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set in Vercel and that the Supabase `waitlist` table and RLS policies are set up (see README or `supabase_waitlist_setup.sql`).

- **Domain not working**  
  In Vercel → Domains, confirm the domain is added and DNS is pointed as instructed. Propagation can take a few minutes to 48 hours.

---

**Note:** This setup is for **Vercel only**. Previous GCP/nginx/SSL scripts have been removed; all production deployment is via Vercel.
