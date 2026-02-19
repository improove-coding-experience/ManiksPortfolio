# Fix Build Error - OneDrive Symlink Issue

## Problem
Next.js build fails with `EINVAL: invalid argument, readlink` error when the project is in a OneDrive folder due to symlink conflicts.

## Solutions (Choose One)

### Solution 1: Move Project Out of OneDrive (Recommended)
1. Close any running dev servers or terminals
2. Move the entire `portfolio` folder from:
   - `C:\Users\user\OneDrive\Desktop\code\portfolio`
   - To: `C:\Users\user\Desktop\code\portfolio` (or `C:\dev\portfolio`)
3. Open the project in the new location
4. Run `npm run build` again

### Solution 2: Exclude .next from OneDrive Sync
1. Right-click the `.next` folder in File Explorer
2. Select "OneDrive" → "Always keep on this device"
3. Or go to OneDrive Settings → Sync and backup → Advanced settings → Exclude folders
4. Add `.next` to the exclusion list
5. Try building again

### Solution 3: Use Dev Server (Works Fine)
The dev server works perfectly even with this build issue:
```bash
npm run dev
```
Then visit `http://localhost:3000` (or 3001 if 3000 is busy)

### Solution 4: Build on Different Machine/CI
- Deploy to Vercel/Netlify (they handle builds automatically)
- Or build on a machine without OneDrive sync

## Why This Happens
OneDrive creates symlinks/junctions for synced files, and Next.js's build cleanup process can't handle these properly on Windows, causing the `readlink` error.

## Current Status
✅ Your code compiles without errors (TypeScript check passed)
✅ Dev server works perfectly
❌ Production build fails due to OneDrive symlink issue

The build error is **environmental**, not a code problem. Your portfolio code is correct!
