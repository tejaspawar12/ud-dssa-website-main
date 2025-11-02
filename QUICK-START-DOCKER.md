# 🚀 Quick Start Docker Guide

## Step 1: Create `.env.local` file

Create a file named `.env.local` in the project root with your environment variables:

```bash
# Copy from env.example or create manually
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Note:** You can start Docker without this file, but form submissions won't work without Supabase credentials.

## Step 2: Start Docker Container

```bash
docker-compose -f docker-compose.dev.yml up --build
```

This will:
- ✅ Create container named **"uddsa"**
- ✅ Enable hot reload (changes reflect automatically)
- ✅ Run on port 3000

## Step 3: Access Website

Open http://localhost:3000 in your browser

## Step 4: Make Changes

Edit any file in `src/` folder → Save → Changes appear automatically!

## Stop Container

Press `Ctrl+C` in terminal, or:
```bash
docker-compose -f docker-compose.dev.yml down
```

---

## Troubleshooting

### Missing `.env.local` warnings?

That's OK! The container will still start. You just need the env vars for:
- Form submissions (requires Supabase)
- Unsubscribe API (requires GitHub - legacy)

### Port 3000 already in use?

Change the port in `docker-compose.dev.yml`:
```yaml
ports:
  - "3001:3000"  # Use 3001 instead
```

Then access: http://localhost:3001

---

**Container name:** `uddsa` (won't affect other containers)

