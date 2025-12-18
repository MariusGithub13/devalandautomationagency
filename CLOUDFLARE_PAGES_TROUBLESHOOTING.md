# Cloudflare Pages setup + troubleshooting for `devalandautomationagency`

If Cloudflare shows **"Failed to create PR"**, a blocked build, or deploy errors after connecting GitHub, run through these checks. This keeps SEO and speed optimizations intact while getting the site live.

## 1) Confirm the project wiring
- **Git provider permissions**: In Cloudflare, disconnect/reconnect the GitHub app if the repo permissions changed. Accept the app install for the `devalandautomationagency` org/repo and allow PR/comment scopes (used for preview URLs).
- **Branch**: Set the production branch to `main`. Enable previews on pull requests if desired.
- **Build settings** (Pages → Settings → Builds & Deployments):
  - Root directory: `frontend`
  - Build command: `npm ci --legacy-peer-deps && npm run build`
  - Output directory: `build`
  - Node: 18 (default). Add `CI=true` if you want stricter builds.
- **Env vars**: add `RECAPTCHA_SECRET_KEY`, `RECAPTCHA_SCORE_THRESHOLD`, `KLAVIYO_PUBLIC_KEY`, `KLAVIYO_PRIVATE_KEY`, and any API/email keys used by functions.

## 2) Fix the "Failed to create PR" / preview URL issues
- Make sure the Cloudflare GitHub app has **Read/Write** on PRs. In GitHub → Settings → Applications → Authorized OAuth Apps → Cloudflare Pages, grant access to the repo.
- If Cloudflare was added before the repo existed or permissions changed, click **Reconnect** in Pages project → **Git** tab.
- Ensure the repo has **at least one commit** on `main` (it does) and that PR creation is allowed (no branch protection preventing the bot).
- You can still deploy without PR integration by clicking **Retry deployment** or **Trigger deploy** from the Pages dashboard after reconnecting.

## 3) Build fails immediately? Quick fixes
- **Cache/node-modules conflicts**: retry with a clean install (`npm ci`) already configured above. If you changed dependencies locally, push the lockfile.
- **Legacy peer deps**: already handled by `--legacy-peer-deps`. Keep this flag unless you resolve peer warnings upstream.
- **Missing env vars**: functions that call external APIs will fail at runtime without keys—set them in Pages **Environment Variables** for Production (and Preview if you use PR previews).
- **Functions routing**: Pages looks for `functions/` at repo root. If you migrate Netlify Functions, place them there and update frontend fetch URLs (or add redirects from `/.netlify/functions/*`).

## 4) DNS and HTTPS checks (to avoid visitor errors)
- Add `www.devaland.com` (and apex if desired) in Pages → **Custom domains**. Cloudflare issues free SSL automatically.
- If DNS stays elsewhere: create a CNAME from `www` to your Pages hostname; keep existing MX/TXT records unchanged. If moving DNS to Cloudflare, import records first, then switch nameservers.
- Enable **Always Use HTTPS** and **HSTS** (already mirrored in `frontend/public/_headers`) so canonical HTTPS stays intact for SEO.

## 5) Verify the deployment end-to-end
1. Trigger a fresh deploy in Pages after reconnection.
2. Open the preview URL and validate:
   - Redirects and SPA routing (`_redirects`) work.
   - Security/SEO headers (`_headers`) match expectations.
   - Forms/reCAPTCHA/Klaviyo calls succeed using the configured env vars.
3. Only after the preview is healthy, flip DNS to the Pages hostname (low TTL for fast rollback).

## 6) If problems persist
- Collect the failed deployment log from Pages → Deployments and note the step that fails (clone, install, build, or upload).
- If GitHub permissions still error, remove and re-install the Cloudflare Pages GitHub app, then re-link the project.
- As a fallback, you can deploy via `wrangler pages deploy frontend/build` after running the build locally with the same command above.

## 7) Bypass the GitHub app with a GitHub Action (guaranteed deploys)
If the Pages GitHub App keeps failing to create PR previews, use the bundled workflow `.github/workflows/cloudflare-pages.yml`:
- Add repository secrets in GitHub → Settings → Secrets and variables → Actions:
  - `CLOUDFLARE_API_TOKEN` with Pages scope (`Account.Resources.Edit`, `Account.WorkersScripts.Edit`).
  - `CLOUDFLARE_ACCOUNT_ID` for your account.
  - `CLOUDFLARE_PROJECT_NAME` set to the Pages project slug (e.g., `devalandautomationagency`).
- The workflow builds `frontend/` with Node 18 (`npm ci --legacy-peer-deps && npm run build`) and publishes `frontend/build` to Pages.
- It runs on pushes to `main`, on PRs (using the head branch as the preview branch), and via **Run workflow**. This keeps preview URLs working even if Cloudflare cannot post PR comments itself.
- You can keep the native Pages integration enabled; this workflow serves as a reliable fallback/primary path and avoids the “Failed to create PR” blocker.
