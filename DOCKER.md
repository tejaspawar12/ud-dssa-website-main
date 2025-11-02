# Docker Setup Guide

This guide explains how to run the UDSSA website in Docker containers locally.

## Prerequisites

- Docker Desktop installed ([Download Docker](https://www.docker.com/products/docker-desktop))
- `.env.local` file with required environment variables (see `env.example`)

## Quick Start

### Production Build (Recommended for Testing)

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the website:**
   - Open http://localhost:3000 in your browser

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Development Mode (with Hot Reload)

1. **Run in development mode:**
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Access the website:**
   - Open http://localhost:3000 in your browser
   - Changes to source code will automatically reload

3. **Stop the container:**
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

## Manual Docker Commands

### Build the Docker Image

```bash
docker build -t ud-dssa-website .
```

### Run the Container

```bash
docker run -p 3000:3000 \
  --env-file .env.local \
  ud-dssa-website
```

### Run with Environment Variables

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your-url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key \
  ud-dssa-website
```

## Environment Variables

Make sure your `.env.local` file contains:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Optional (for legacy APIs)
GITHUB_REPO_OWNER=your-github-username
GITHUB_REPO_NAME=ud-dssa-website
GITHUB_TOKEN=your-github-token
```

The Docker Compose files will automatically load these from `.env.local`.

## Docker Files Explained

### `Dockerfile`
- **Multi-stage build** for optimized production image
- Stage 1: Install dependencies
- Stage 2: Build Next.js application
- Stage 3: Create minimal production runtime
- Uses Node.js 20 Alpine (lightweight Linux)

### `Dockerfile.dev`
- **Development Dockerfile** with hot reload support
- Includes all devDependencies
- Mounts source code as volume for live updates

### `docker-compose.yml`
- Production configuration
- Handles environment variables
- Health checks included

### `docker-compose.dev.yml`
- Development configuration
- Volume mounting for hot reload
- Faster rebuilds during development

### `.dockerignore`
- Excludes unnecessary files from Docker build context
- Reduces build time and image size

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, change the port mapping:

```yaml
ports:
  - "3001:3000"  # Use port 3001 on host
```

### Environment Variables Not Loading

1. Check that `.env.local` exists in the project root
2. Verify the file contains all required variables
3. Restart the container: `docker-compose restart`

### Build Fails

1. Clear Docker cache:
   ```bash
   docker system prune -a
   ```

2. Rebuild without cache:
   ```bash
   docker-compose build --no-cache
   ```

### Container Stops Immediately

1. Check logs:
   ```bash
   docker-compose logs
   ```

2. Run container in interactive mode:
   ```bash
   docker run -it -p 3000:3000 --env-file .env.local ud-dssa-website
   ```

## Useful Commands

```bash
# View running containers
docker ps

# View container logs
docker-compose logs -f

# Execute command in running container
docker exec -it ud-dssa-website sh

# Remove all containers and images
docker-compose down -v
docker rmi ud-dssa-website

# View container resource usage
docker stats ud-dssa-website
```

## Next Steps

1. **Test the form submission** - Make sure Supabase connection works
2. **Check API endpoints** - Verify `/api/submit-form` is accessible
3. **Test responsive design** - Open DevTools and test mobile view
4. **Verify environment variables** - Ensure all APIs have proper credentials

## Notes

- The production Dockerfile uses Next.js standalone output for smaller images
- Development mode includes source maps and hot reload
- All environment variables are loaded from `.env.local`
- The container runs as a non-root user for security

