# Copilot / AI Agent Instructions for this repository

Purpose: Help an AI coding agent become productive quickly in this mono-repo containing a small FastAPI backend and a Create React App-based frontend.

- **Big picture**: This repo has two main parts:
  - `backend/` — FastAPI app (`server.py`) using Motor (async MongoDB). Environment-driven config: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`. Routes are mounted under the `/api` prefix (see `APIRouter(prefix="/api")`). Use `uvicorn` to run during development (example below).
  - `frontend/` — React (Create React App) with `craco` used for builds. Entry is `src/index.js` and routing is in `src/App.js` (React Router v6). UI primitives live in `src/components/ui/` (Radix + custom wrappers).

- **Why this structure**: separation of API and UI simplifies local dev and deployment. Frontend deploys to Netlify as SPA (see `netlify.toml` for build config). Frontend build step runs a sitemap generator (`scripts/generate-sitemap.mjs`) before `npm run build`.

- **Key files to reference**:
  - `backend/server.py` — API, DB client, CORS, example models (`StatusCheck`, `StatusCheckCreate`) and endpoints (`POST /api/status`, `GET /api/status`).
  - `backend/requirements.txt` — exact Python deps and lint/test tooling to match.
  - `frontend/package.json` — node engine, `craco` usage, lifecycle hooks (notably `postinstall` -> `fix-missing-files`), and `prebuild` sitemap generation.
  - `frontend/src/App.js` — routing, lazy-loading example for `ChatBubble`, and how `Toaster`, `Header`, `Footer`, and consent components are wired.
  - `frontend/src/components/ui/` — shared UI primitives (Radix wrappers). Use these rather than adding ad-hoc DOM/ARIA implementations.
  - `netlify.toml` — deployment config with build commands, env vars (Node 18.20.4, `--legacy-peer-deps`), CSP headers, and SPA redirect rules.
  - `craco.config.js` — webpack customization: disables source maps, configures `@/` alias, and optional hot reload control via `DISABLE_HOT_RELOAD` env var.
  - `frontend/src/lib/utils.js` — `cn()` utility for merging Tailwind classes (using `clsx` + `tailwind-merge`).

- **Concrete dev commands**:
  - Frontend dev: `cd frontend && npm install && npm start` (uses `npx craco start` per `package.json`).
  - Frontend build: `cd frontend && npm run build` (runs `node scripts/generate-sitemap.mjs` first).
  - Backend dev (recommended): create env file `backend/.env` with `MONGO_URL` and `DB_NAME`, then run:
    - `python -m venv .venv && source .venv/bin/activate`
    - `pip install -r backend/requirements.txt`
    - `uvicorn backend.server:app --reload --port 8000 --host 127.0.0.1`
  - Tests / linters follow Python tooling from `requirements.txt` (pytest, black, isort, flake8, mypy) and frontend CRA test scripts.

- **Environment & secrets**:
  - Backend expects `backend/.env` (loaded with python-dotenv). Keys used by the code: `MONGO_URL`, `DB_NAME`, optionally `CORS_ORIGINS`.
  - Do not hardcode secrets in code. If asked to add a secret, reference `.env` and document required keys in PR description.

- **Patterns & conventions specific to this repo**:
  - Router composition: API routes are added to an `APIRouter(prefix="/api")` and then included in `app`. When adding endpoints prefer router usage for consistent prefixing.
  - Async DB: use `motor.motor_asyncio.AsyncIOMotorClient` and `await` for DB calls. Close the client on shutdown (see `@app.on_event("shutdown")`).
  - Frontend import alias `@/` is used in `src` (see `jsconfig.json`) — prefer `@/path` imports over relative deep paths.
  - UI primitives: prefer components in `src/components/ui/` (e.g., `button.jsx`, `toast.jsx`) to ensure consistent styling and accessibility.
    - Use `class-variance-authority` (CVA) pattern for variant-based styling (see `button.jsx` for reference).
    - Always use `cn()` from `@/lib/utils` for className merging instead of manual string concatenation.
    - All UI components wrap Radix primitives with consistent Tailwind styling and CVA variants.
  - React Router v6: use `<Routes>` + `<Route path="..." element={<Component/>} />`. See `src/App.js` for routing examples and how additional pages are added.
  - Lazy loading: non-critical UI uses `React.lazy` and `Suspense` (example: `ChatBubble` in `App.js`). Follow this pattern for heavy components.
  - Build hooks: `prebuild` runs a sitemap generator before building. If modifying build output, ensure sitemap script still runs.
  - Postinstall fix: `fix-missing-files` copies `react-router-dom` dist file to `.mjs` to satisfy ESM consumers — be careful when upgrading `react-router-dom`.
  - Netlify deployment: SPA redirect (`/* /index.html 200`) is configured in both `netlify.toml` and `frontend/public/_redirects` — keep both in sync.
  - Root-level `package.json` pins `ajv` deps for webpack compatibility — don't remove these.

- **Examples to copy from**:
  - Adding an API route: mirror `create_status_check` in `backend/server.py` — create Pydantic models for requests/responses and persist via Motor.
  - Adding a route in frontend: add a page component under `frontend/src/pages/` and register the route in `frontend/src/App.js`. Update `scripts/generate-sitemap.mjs` ROUTES array.
  - Using DB: follow async pattern `await db.collection.find().to_list()` and return Pydantic-constructed objects if returning via FastAPI.
  - Creating UI components: extend Radix primitives with CVA variants (see `button.jsx`) and use `cn()` for className composition.

- **Testing & CI hints**:
  - Backend tests: repository includes `pytest` in requirements — run from project root: `pytest -q` (after installing backend deps in venv and setting test DB env variables).
  - Frontend tests: `cd frontend && npm test` (CRA test runner).

- **When making changes an AI agent should do**:
  - Edit existing files minimally and keep public APIs stable (don't rename top-level routes without updates across frontend/backend).
  - Add new environment keys to `backend/.env.example` (create if missing) and mention them in PR notes.
  - Run local build/test commands described above before proposing a change.

- **Files to check when debugging issues**:
  - `backend/server.py` for API logic and DB connection issues.
  - `frontend/package.json` for build scripts, `scripts/generate-sitemap.mjs` for prebuild behavior.
  - `frontend/src/App.js` and `frontend/src/index.js` for routing, providers, and root render issues.
  - `netlify.toml` for deployment config, CSP headers causing content blocking, or build failures.
  - `craco.config.js` if webpack build issues or hot reload problems occur.

If anything is unclear or you'd like me to expand a section (example end-to-end add-route PR, or add a `backend/.env.example`), tell me which area to elaborate. I'll iterate the file.
