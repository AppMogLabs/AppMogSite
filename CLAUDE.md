# CLAUDE.md — AppMog Website

> Instructions for Claude Code when working on this project.
> You are the final quality gate before code ships.

## Your Role

You are a code reviewer and quality enforcer. Your job is to:
1. Review code for bugs, security issues, and missing error handling
2. Ensure consistency with project conventions
3. Write or improve tests to meet coverage targets
4. Handle git workflow (commit, push) when code passes review
5. Provide feedback

Do NOT refactor working code for style preferences. Only flag things that matter: bugs, security, performance, missing tests, convention violations.

## Project Overview

AppMog Website is the flagship portfolio site for App Mog Labs Limited. A retro-futuristic, sci-fi themed showcase featuring CRT effects, Matrix green palette, and brutalist design. Displays all App Mog products with SEO-optimized pages.

**Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS
**Deployment:** Vercel (appmog.app)
**Status:** Review — ready for final QA and deploy

## Project Structure

```
appmog-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Home (boot sequence, products grid)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog index
│   │   │   └── [slug]/         # Individual blog posts
│   │   └── products/
│   │       └── [slug]/         # 7 product pages
│   ├── components/             # Reusable UI components
│   │   ├── CRT.tsx             # CRT screen effects
│   │   ├── GlitchText.tsx      # Glitch animations
│   │   ├── ProductCard.tsx     # Product grid cards
│   │   └── ASCIILogo.tsx       # ASCII art logo
│   └── lib/
│       └── utils.ts            # Utilities
├── public/                     # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## Conventions

- **Package manager:** npm
- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS with custom CSS for CRT effects
- **Fonts:** VT323 (display), Fira Code (body) — Google Fonts
- **Commit format:** Conventional Commits (feat:, fix:, chore:, docs:, test:)
- **TypeScript strict mode:** Enabled
- **Design system:** Matrix green (#00ff41) on black, amber (#ff6a00) accents
- **Effects:** CSS animations for scanlines, phosphor glow, glitch hover

## Critical Paths (Must Have Tests)

- Blog post rendering and markdown parsing
- Product page dynamic routing
- SEO metadata generation (title, description, OG)
- Responsive breakpoint handling
- CRT effect performance (60fps on mobile)

## Security Rules

- Never commit or log API keys or secrets
- Validate all user input before processing
- HTTPS only for all external calls
- No sensitive data in client-side code

## Error Handling Patterns

- **404 handling:** Custom not-found.tsx for invalid product/blog slugs
- **Build errors:** Check for HTML entities in source (`&lt;`, `&gt;`, `&amp;`)
- **Performance:** Degrade CRT effects on low-power devices
- **Fallbacks:** Static generation for all pages, ISR for blog

## Environment Variables

```
# None required for static site
# Add here if API integrations added later
```

## Known Technical Debt

- [ ] Blog articles need import from Talos content files
- [ ] OG images need generation for each product page
- [ ] Lighthouse scores need verification (expected 95+)

## Common Build Errors

### HTML Entity Encoding in Source Code
**Symptom:** TypeScript errors like "Cannot find name 'lt'" or generic syntax errors  
**Cause:** HTML entities (`&lt;`, `&gt;`, `&amp;`) in code instead of actual characters  
**Fix:**
```bash
sed -i '' 's/&lt;/</g' src/**/*.ts
sed -i '' 's/&gt;/>/g' src/**/*.ts  
sed -i '' 's/&amp;/\&/g' src/**/*.ts
npm run build
```
**Prevention:** Always verify source code doesn't contain HTML entities before committing. Run `grep -r "&lt;\|&gt;\|&amp;" src/` to check.

### CRT Effect Performance Issues
**Symptom:** Jank, low FPS on mobile  
**Fix:** Reduce scanline density, disable curvature effect on mobile viewport  
**Prevention:** Test on actual mobile devices, not just Chrome DevTools

## When Reviewing

1. Verify `npm run build` passes with zero errors
2. Check all new code has appropriate test coverage
3. Verify no secrets are exposed in code or logs
4. Ensure responsive design works on mobile (320px+)
5. Run Lighthouse and ensure 90+ on all metrics
6. Check blog posts render correctly with markdown
7. Verify product pages have proper SEO meta tags
8. If everything passes: commit with conventional commit message and push

## When Project is Finished

When the operator says "project finished" or "commit to github":

1. Commit all changes with conventional commit message
2. Push to GitHub
3. Write FEATURES.md — a complete list of what the product does

FEATURES.md is NOT a review report. It's a product features document for marketing and App Store submission. Write it for end-users, not developers.

Save to: `/Users/user01/.openclaw/workspace/projects/review/appmog-website/FEATURES.md`

### FEATURES.md Format

```markdown
# {Project Name} — Product Features

## Core Functionality
- {Feature 1: what it does in user terms}
- {Feature 2}
- {Feature N}

## User Experience
- {UX feature or flow}
- {Platform-specific features}

## Technical Features (if relevant to users)
- {e.g. "Works offline", "End-to-end encrypted"}

## What's New in This Version
- {Any features added during final review/testing}
```

# Review Report Output

After completing a review (whether or not you make fixes), generate a review report and save it to:

```
/Users/user01/.openclaw/workspace/shared/outbox/claude-code/reviews/YYYY-MM-DD-appmog-website.md
```

Use today's date (e.g. `2026-03-10-appmog-website.md`). If multiple reviews happen on the same day, append a number (e.g. `2026-03-10-appmog-website-2.md`).

Create the directories if they don't exist.

## Report Format

Use this exact structure:

```markdown
# Code Review: AppMog Website
**Date:** {YYYY-MM-DD}
**Reviewer:** Claude Code
**Branch:** {current branch}

## Issues Found

### {Issue Title}
- **Severity:** Critical / High / Medium / Low
- **File:** {filepath:line}
- **What was wrong:** {One sentence describing the problem}
- **Why it matters:** {One sentence on the impact}
- **Correct pattern:** {Show the right way to do it}
- **Fixed:** Yes / No

## Patterns to Adopt

{3-5 reusable rules distilled from issues}

## Test Coverage Summary

| Critical Path | Status |
|---|---|
| {path name} | {Tested / Partial / Missing} |

## Changes Made

{Brief list of what was fixed in this session, with commit hashes if applicable}
```

## Rules

- Be specific in "Correct pattern" — show code, not just advice
- Keep "Patterns to Adopt" actionable and general
- Don't pad with praise or filler — Codie needs signal, not noise
- If you didn't fix something, explain why in the issue entry
