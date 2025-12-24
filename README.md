# Here are your Instructions

## Cloudflare Pages deployment

A GitHub Actions workflow (`Deploy to Cloudflare Pages`) is available to publish the built React app directly to Cloudflare Pages. To enable it:

1. In your GitHub repository settings, add the following secrets:
   - `CLOUDFLARE_API_TOKEN` – Pages deploy token with permission to manage deployments.
   - `CLOUDFLARE_ACCOUNT_ID` – Your Cloudflare account ID.
2. Make sure the target Pages project is named `devalandautomationagency` (or update the workflow/project name accordingly).
3. Push to `main` or `work`, or trigger the workflow manually via **Actions → Deploy to Cloudflare Pages → Run workflow**. The build output from `frontend/build` will be uploaded to Cloudflare.
