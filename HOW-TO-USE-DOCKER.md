# 🐳 How to Use Docker with Hot Reload

## ✅ YES - Changes Are Automatic!

When you use the **development Docker setup**, any changes you make to your code will **automatically** be reflected in the running container. You **DO NOT** need to rebuild or restart the container.

## Quick Start for Development (with Hot Reload)

1. **Start the development container:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Make changes to your code:**
   - Edit any file in `src/` folder
   - Edit components, pages, API routes, etc.
   - Save the file

3. **See changes immediately:**
   - Next.js will detect the file change
   - The browser will automatically refresh
   - No need to rebuild or restart!

## How It Works

The development Docker setup uses **volume mounting**:

```
Your Local Files  →  Mounted into Container  →  Next.js Dev Server
   (src/...)            (same files)              (watches for changes)
```

- Your local code is **mounted** into the container
- Next.js dev server **watches** for file changes
- Changes are **detected automatically**
- Browser **refreshes automatically**

## Example Workflow

```bash
# 1. Start container (only needed once)
docker-compose -f docker-compose.dev.yml up

# 2. Edit src/components/ContactForm.tsx
#    (save the file)

# 3. Browser automatically shows changes!
#    (no rebuild, no restart needed)
```

## What Gets Hot Reloaded?

✅ **These changes are automatic:**
- Component files (`src/components/*.tsx`)
- Page files (`src/app/page.tsx`, `src/app/layout.tsx`)
- API routes (`src/app/api/**/*.ts`)
- Type definitions (`src/types/*.ts`)
- Data files (`src/data/*.ts`)
- Styles (`src/app/globals.css`)
- Configuration files (Next.js config, Tailwind config)

⚠️ **These require container restart:**
- `package.json` (need to reinstall dependencies)
- Environment variables (`.env.local`)
- Dockerfile changes

## Production vs Development

### Development Mode (Hot Reload) ✅
```bash
docker-compose -f docker-compose.dev.yml up
```
- ✅ Hot reload enabled
- ✅ Fast refresh
- ✅ See changes immediately
- ✅ Good for active development

### Production Mode (Optimized) 🚀
```bash
docker-compose up
```
- ✅ Optimized build
- ✅ Smaller image
- ❌ No hot reload (must rebuild)
- ✅ Good for testing production build

## Common Scenarios

### Scenario 1: Adding a New Component
1. Create `src/components/NewComponent.tsx`
2. Save the file
3. ✅ Container automatically picks it up
4. Import and use it immediately

### Scenario 2: Modifying an API Route
1. Edit `src/app/api/submit-form/route.ts`
2. Save the file
3. ✅ API route automatically updates
4. Test immediately without restart

### Scenario 3: Changing Styles
1. Edit `src/app/globals.css` or component styles
2. Save the file
3. ✅ Styles automatically update
4. Browser shows changes instantly

## Troubleshooting Hot Reload

### Changes Not Showing?

1. **Check container is running:**
   ```bash
   docker ps
   ```

2. **Check container logs:**
   ```bash
   docker-compose -f docker-compose.dev.yml logs
   ```
   Look for: "✓ Ready in X ms" or file change messages

3. **Verify volume mount:**
   ```bash
   docker exec -it ud-dssa-website-dev ls -la /app/src
   ```
   Should show your files

4. **Hard refresh browser:**
   - Press `Ctrl + Shift + R` (Windows/Linux)
   - Press `Cmd + Shift + R` (Mac)

### Still Not Working?

Restart the container:
```bash
docker-compose -f docker-compose.dev.yml restart
```

Or rebuild:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Tips

1. **Use development mode** when actively coding
2. **Check terminal output** - Next.js shows file change notifications
3. **Keep container running** - don't stop it between edits
4. **Browser DevTools** - useful for debugging hot reload issues

---

## Summary

✅ **YES** - Changes are automatic with development Docker setup  
✅ **NO** rebuild needed for code changes  
✅ **INSTANT** updates in browser  
✅ **PERFECT** for active development  

Just edit → save → see changes! 🚀

