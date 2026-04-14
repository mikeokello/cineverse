# CineVerse Trello Board - Professional Card Content

> **Copy and paste these cards into your Trello board at:** https://trello.com/b/EabNCCS9/cineverse-movie-website

---

## 📋 TRELLO BOARD STRUCTURE

Your board should have these 5 lists:
1. **📋 Backlog**
2. **🚀 In Progress**
3. **✅ Completed**
4. **📚 Documentation**
5. **🐛 Issues/Bugs**

---

## ✅ COMPLETED LIST (7 Cards)

### Card 1: Project Setup & Repository
```
TITLE: ✅ Project Setup & Repository

DESCRIPTION:
Created a professional web development project with proper version control.

COMPLETED TASKS:
✓ Initialized Git repository locally
✓ Created project structure (src/, dist/, public/)
✓ Set up package.json with Vite configuration
✓ Configured build scripts (npm run build, npm run dev)
✓ Created GitHub repository: https://github.com/mikeokello/cineverse
✓ Pushed initial project files to main branch
✓ Set up .gitignore for production builds

TECHNOLOGIES:
- Git/GitHub
- Vite.js (Build tool)
- Node.js/npm (Package manager)
- ES6+ JavaScript

LABELs: setup, completed
```

---

### Card 2: Deploy to GitHub Pages
```
TITLE: ✅ Deploy to GitHub Pages

DESCRIPTION:
Successfully deployed CineVerse to GitHub Pages for public access.

DEPLOYMENT DETAILS:
✓ Configured Vite with base path: /cineverse/
✓ Created dist/ folder with optimized production build
✓ Configured GitHub Pages to serve from main branch
✓ Set up GitHub Actions workflow for automatic deployment
✓ Added .nojekyll file for proper routing

LIVE URLs:
- Main: https://mikeokello.github.io/cineverse/
- With index.html: https://mikeokello.github.io/cineverse/index.html

FEATURES:
✓ Auto-deploys on every push to main branch
✓ Production-optimized assets (minified CSS/JS)
✓ Instant updates to live website
✓ No manual deployment needed

LABELs: deployment, completed
```

---

### Card 3: Fetch Movies from TMDB API
```
TITLE: ✅ Fetch Movies from TMDB API

DESCRIPTION:
Integrated The Movie Database (TMDB) API to populate movie catalog.

API INTEGRATION:
✓ Connected to TMDB API (https://www.themoviedb.org/settings/api)
✓ Fetches 50 popular movies on page load
✓ Retrieves movie: title, poster, description, ID
✓ Automatically fetches YouTube trailer IDs

IMPLEMENTATION:
- Endpoint: /movie/popular
- Parameters: api_key, language=en-US, page=1
- Response: Movie objects with poster_path, overview
- Trailer lookup: /movie/{id}/videos

FEATURES:
✓ Movies display with poster images
✓ 15-20 movies shown with complete trailers
✓ Error handling for API failures
✓ Real-time data from TMDB database

DATA DISPLAYED:
- Movie title
- Movie poster (500x width from TMDB CDN)
- Movie description/overview
- YouTube trailer availability

LABELs: backend, api, feature, completed
```

---

### Card 4: Professional Search Feature
```
TITLE: ✅ Professional Search Feature

DESCRIPTION:
Implemented real-time search functionality with professional UI.

SEARCH FUNCTIONALITY:
✓ Search bar in header with glass-morphism design
✓ Real-time search as user types (2+ characters)
✓ Filter movies by: title, description
✓ Dedicated search results page
✓ Shows result count: "Found X movie(s)"
✓ Clear button to return to home page

FEATURES:
✓ Responsive search bar on mobile (full-width)
✓ Magnifying glass search icon (🔍)
✓ Red accent color matching brand (#e50914)
✓ Blur effect and semi-transparent background
✓ Smooth hover animations
✓ "No movies found" message when empty

HOW IT WORKS:
1. User types movie name in search bar
2. Results update automatically
3. Only matching movies display
4. Click PLAY to watch trailer
5. Click ✕ to clear and return to home

UI/UX:
- Keyboard support: Press Enter to search
- Click magnifying glass button to search
- Clear on empty input
- Mobile-friendly layout

LABELs: feature, search, ui, completed
```

---

### Card 5: Movie Trailer Playback
```
TITLE: ✅ Movie Trailer Playback

DESCRIPTION:
Integrated YouTube video playback in modal popup for trailers.

TRAILER FEATURES:
✓ PLAY button on each movie card
✓ YouTube trailers in full modal popup
✓ Auto-play enabled when modal opens
✓ Close button (×) to exit modal
✓ Click outside modal to close
✓ Responsive modal on all devices

IMPLEMENTATION:
✓ YouTube iframe embedded securely
✓ Dynamic trailer URL generation
✓ /movie/{id}/videos endpoint for trailer lookup
✓ Filters for YouTube Trailer type videos

USER EXPERIENCE:
1. Click PLAY button on any movie
2. Modal popup appears with full-screen trailer
3. Video auto-plays with sound
4. User can pause/play/fullscreen
5. Click × or outside to close
6. Can play multiple trailers in session

TECHNICAL:
- iframe URL: https://www.youtube.com/embed/{trailerId}
- Parameters: autoplay=1, rel=0 (no suggestions)
- Modal background: Semi-transparent black overlay
- Bootstrap hidden/visible on demand

LABELs: feature, video, frontend, completed
```

---

### Card 6: Responsive Mobile Design
```
TITLE: ✅ Responsive Mobile Design

DESCRIPTION:
Implemented mobile-first responsive design for all screen sizes.

RESPONSIVE FEATURES:
✓ Mobile-first CSS approach
✓ Tablet optimization (768px breakpoint)
✓ Desktop optimization (1200px max-width)
✓ Hamburger menu for mobile navigation
✓ Touch-friendly buttons and inputs

BREAKPOINTS:
- Mobile: < 768px (Full-width layout)
- Tablet: 768px - 1024px (Adjusted grid)
- Desktop: > 1024px (Full layout)

MOBILE FEATURES:
✓ Hamburger menu (3-line icon)
✓ Full-width search bar below logo
✓ Single-column movie grid
✓ Optimized movie card sizes
✓ Touch-friendly spacing
✓ Animated menu slide-out
✓ Reduced font sizes for mobile
✓ Optimized modal dimensions

LAYOUT IMPROVEMENTS:
✓ Header adapts to small screens
✓ Navigation collapses to hamburger
✓ Search bar expands to full width on mobile
✓ Movie grid: 1-2 columns on mobile, 3+ on desktop
✓ About cards stack vertically on mobile
✓ Footer text centered and readable

TESTING:
✓ Tested on iPhone, Android, tablet sizes
✓ All features work on mobile
✓ Performance optimized for mobile networks
✓ Touch interactions smooth and responsive

LABELs: design, responsive, frontend, completed
```

---

### Card 7: Professional Styling & UI
```
TITLE: ✅ Professional Styling & UI

DESCRIPTION:
Created professional, Netflix-inspired dark theme with smooth animations.

DESIGN SYSTEM:
✓ Dark gradient background (Netflix-style)
✓ Primary color: Red (#e50914) - Netflix brand
✓ Text: White on dark background
✓ Accent: Semi-transparent overlays for depth
✓ Consistent spacing and padding

PROFESSIONAL FEATURES:
✓ Glass-morphism effects (blur + transparency)
✓ Movie poster backgrounds in header/footer
✓ Smooth CSS transitions and animations
✓ Box shadows for depth
✓ Hover effects on buttons and cards
✓ Fade-in animations for page transitions
✓ Professional typography (Segoe UI, Geneva, Verdana)

COLOR PALETTE:
- Background: Linear gradient #0a0a0a → #1a1a2e → #16213e
- Primary: #e50914 (Red - Netflix)
- Text: #ffffff (White)
- Accents: rgba(255,255,255,0.05-0.15) (Subtle overlays)
- Hover: #b20710 (Darker red)

ANIMATIONS:
✓ 0.3s smooth transitions on all interactions
✓ Card hover: translateY(-5px) + shadow increase
✓ Button hover: Light color change
✓ Menu slide-in from right on mobile
✓ Fade-in on page transitions
✓ Scale effect on search button hover

COMPONENTS STYLED:
✓ Header: Dark with movie background
✓ Navigation: Red hover effects
✓ Search bar: Glass-morphism design
✓ Movie cards: Gradient background, shadow, hover lift
✓ Modal: Full-screen overlay with centered content
✓ Buttons: Red theme with hover darkening
✓ Footer: Matching header with background image

FONTS & TYPOGRAPHY:
✓ Font family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
✓ Headers: Bold, large sizes (1.5rem - 2rem)
✓ Body text: Regular weight, readable line-height
✓ Buttons: Bold, uppercase on some, title case on others

LABELs: design, ui, styling, completed
```

---

## 📚 DOCUMENTATION LIST (3 Cards)

### Card 1: CineVerse Project Overview
```
TITLE: 📝 CineVerse Project Overview

DESCRIPTION:
Complete project information and quick reference guide.

PROJECT DETAILS:
PROJECT NAME: CineVerse - Movie Website
TAGLINE: Discover, Search, Watch Movie Trailers
DEVELOPER: Mike Okello (@mikeokello)
CREATED: April 14, 2026
STATUS: ✅ Live & Fully Functional

🔗 QUICK LINKS:
- GitHub Repository: https://github.com/mikeokello/cineverse
- Live Website: https://mikeokello.github.io/cineverse/index.html
- Trello Board: https://trello.com/b/EabNCCS9/cineverse-movie-website
- TMDB API: https://www.themoviedb.org/settings/api

TECHNOLOGY STACK:
FRONTEND:
- HTML5 (Semantic markup)
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+ (Async/Await, Fetch API)

BUILD & DEPLOYMENT:
- Build Tool: Vite.js 8.0.4
- Package Manager: npm
- Version Control: Git/GitHub
- Hosting: GitHub Pages
- CI/CD: GitHub Actions

EXTERNAL SERVICES:
- Movie Data: TMDB API (The Movie Database)
- Video Platform: YouTube (Trailer embeds)
- CDN: TMDB CDN for movie posters

✨ KEY FEATURES:
✅ Movie Catalog - 50+ popular movies
✅ Real-time Search - Filter by title/description
✅ YouTube Trailers - Watch full trailers in modal
✅ Responsive Design - Mobile to desktop
✅ Professional UI - Netflix-inspired dark theme
✅ Auto-deployment - GitHub Actions workflow
✅ Performance - Optimized CSS/JS, minified

PROJECT STRUCTURE:
```
cineverse/
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── dist/
│   ├── index.html
│   └── assets/
├── public/
├── index.html (source)
├── package.json
├── vite.config.js
└── .github/
    └── workflows/
        └── deploy.yml
```

PERFORMANCE METRICS:
- Build time: < 1 second
- JavaScript size: 5.07 kB (gzipped: 1.90 kB)
- CSS size: 6.15 kB (gzipped: 1.75 kB)
- HTML size: 2.21 kB (gzipped: 0.80 kB)

LABELs: documentation, info, important
```

---

### Card 2: Feature & API Documentation
```
TITLE: 🎬 Feature & API Documentation

DESCRIPTION:
Detailed documentation of implemented features and API usage.

IMPLEMENTED FEATURES:

1. MOVIE DISCOVERY
   - Display 50+ popular movies from TMDB
   - Show poster, title, and description
   - Filter by search query
   - Browse all movies

2. ADVANCED SEARCH
   - Search by movie title
   - Search by movie description
   - Real-time results (2+ characters)
   - Result count display
   - Clear search button

3. MULTIMEDIA
   - YouTube trailer playback in modal
   - Auto-play on modal open
   - Full-screen support
   - Close button and click-outside to close

4. NAVIGATION
   - Home: Featured movies (top 3)
   - Movies: All movies catalog
   - About: Movie information with descriptions
   - Hamburger menu on mobile

5. USER INTERFACE
   - Professional dark theme
   - Netflix-inspired design
   - Glass-morphism effects
   - Responsive to all screen sizes
   - Smooth animations and transitions

API DOCUMENTATION:

DATABASE: TMDB (The Movie Database)
API URL: https://api.themoviedb.org/3
API KEY: 52b4a588b74613a90d56523f2f58b314

ENDPOINTS USED:

1. GET /movie/popular
   Description: Fetch popular movies
   Parameters:
   - api_key: Authentication key
   - language: en-US
   - page: 1
   
   Response includes:
   - id: Movie ID
   - title: Movie name
   - poster_path: Image URL path
   - overview: Description
   - vote_average: Rating

2. GET /movie/{id}/videos
   Description: Fetch videos for specific movie
   Parameters:
   - api_key: Authentication key
   - movie_id: The movie ID
   
   Response includes:
   - results: Array of video objects
   - type: 'Trailer', 'Teaser', etc.
   - site: 'YouTube', 'Vimeo', etc.
   - key: YouTube video ID

IMAGE ASSETS:
- Base URL: https://image.tmdb.org/t/p/w500
- Path: /poster_path (from API response)
- Full URL: https://image.tmdb.org/t/p/w500{poster_path}

LABELs: documentation, api, features
```

---

### Card 3: Development & Deployment Guide
```
TITLE: 🚀 Development & Deployment Guide

DESCRIPTION:
Step-by-step guide for development, building, and deploying.

LOCAL DEVELOPMENT:

SETUP:
1. Clone repository: git clone https://github.com/mikeokello/cineverse.git
2. Navigate to folder: cd cineverse
3. Install dependencies: npm install
4. Start development server: npm run dev
5. Open: http://localhost:5173

COMMANDS:
- npm run dev     → Start local development server
- npm run build   → Create production build
- npm run preview → Preview production build locally

PROJECT CONFIGURATION:
- vite.config.js: Build configuration
- package.json: Dependencies and scripts
- .gitignore: Files to exclude from git
- .nojekyll: GitHub Pages routing file

BUILDING FOR PRODUCTION:

1. Run build command:
   npm run build

2. Output created in dist/ folder:
   - dist/index.html (Optimized HTML)
   - dist/assets/index-*.css (Minified CSS)
   - dist/assets/index-*.js (Minified JavaScript)

3. Size optimization:
   - CSS minified and gzipped
   - JavaScript minified and gzipped
   - Assets optimized for web

DEPLOYMENT TO GITHUB PAGES:

AUTOMATIC (via GitHub Actions):
1. Push changes to main branch: git push origin main
2. GitHub Actions workflow triggers automatically
3. Build runs on GitHub servers
4. dist/ folder deployed to gh-pages branch
5. Website updates in 2-3 minutes
6. Visit: https://mikeokello.github.io/cineverse/

MANUAL (SSH/HTTPS setup):
1. Build locally: npm run build
2. Push dist folder: git add dist/
3. Commit: git commit -m "Deploy update"
4. Push: git push origin main

GIT WORKFLOW:

Feature branches (optional):
1. Create branch: git checkout -b feature/feature-name
2. Make changes and commit
3. Push: git push origin feature/feature-name
4. Create Pull Request on GitHub
5. Merge to main
6. Deploy

Release tags (optional):
1. Tag release: git tag -a v1.0.0 -m "Release version"
2. Push tags: git push origin --tags

MONITORING LIVE SITE:

Check live deployment:
- URL: https://mikeokello.github.io/cineverse/index.html
- Verify all features working
- Check console for errors (F12 → Console)
- Test search functionality
- Test trailer playback
- Test mobile responsiveness

GitHub Pages settings:
- Repo: https://github.com/mikeokello/cineverse
- Settings → Pages
- Source: Deploy from branch (main)
- Folder: / (root)

LABELs: documentation, deployment, development
```

---

## 🚀 IN PROGRESS / 📋 BACKLOG LIST (5 Cards)

### Card 1: Genre Filtering
```
TITLE: 🎯 Add Genre Filtering

DESCRIPTION:
Add ability to filter movies by genre for better user experience.

PROPOSED IMPLEMENTATION:
□ Add genre dropdown/selector to header
□ Fetch genre IDs from TMDB API (/genre/movie/list)
□ Store genres in JavaScript variable
□ Filter movies by selected genre
□ Display genre tag on search results
□ Add "All Genres" default option
□ Save selected genre to session

GENRES TO INCLUDE:
- Action
- Comedy
- Drama
- Horror
- Romance
- Science Fiction
- Thriller
- Animation

FEATURES:
□ Real-time filtering when genre changes
□ Show genre on movie cards
□ Filter in search results too
□ Mobile-friendly genre selector
□ Smooth transition between genres

ESTIMATED EFFORT: Medium (4-6 hours)
PRIORITY: HIGH

LABELs: feature, filtering, todo, high-priority
```

---

### Card 2: Movie Ratings & Reviews
```
TITLE: ⭐ Add Movie Ratings

DESCRIPTION:
Display TMDB ratings and scores for movies.

PROPOSED IMPLEMENTATION:
□ Display rating from TMDB (vote_average: 0-10)
□ Show as star rating (0-5 stars)
□ Display numeric score (e.g., "8.5/10")
□ Show number of votes/reviews
□ Sort movies by rating (highest to lowest)
□ Add rating filter in search

FEATURES:
□ Star icons for visual representation
□ Color coding: Green (high) → Yellow (medium) → Red (low)
□ Rating displayed on each movie card
□ Detailed ratings on movie description
□ Sort by rating option

RATING THRESHOLDS:
- 8.0-10.0: Excellent (5 stars) 🌟🌟🌟🌟🌟
- 6.5-7.9: Good (4 stars) 🌟🌟🌟🌟
- 5.0-6.4: Average (3 stars) 🌟🌟🌟
- 3.0-4.9: Below Average (2 stars) 🌟🌟
- 0-2.9: Poor (1 star) 🌟

ESTIMATED EFFORT: Medium (3-5 hours)
PRIORITY: MEDIUM

LABELs: feature, ratings, todo, ui
```

---

### Card 3: Add Watchlist Feature
```
TITLE: 📌 Add to Watchlist

DESCRIPTION:
Allow users to save movies to personal watchlist.

PROPOSED IMPLEMENTATION:
□ Add "Add to Watchlist" button on each movie
□ Store watchlist in browser localStorage
□ Create dedicated "My Watchlist" page
□ Show count of watchlist items
□ Persist watchlist across sessions
□ Remove from watchlist option
□ Clear entire watchlist option

FEATURES:
□ Heart icon button to add/remove
□ Animated button (fill/unfill heart)
□ Watchlist counter in header
□ Separate watchlist page
□ Show watchlist status on cards
□ Search within watchlist
□ Sort watchlist (date added, rating, etc.)
□ Export watchlist (optional)

DATA STORAGE:
- localStorage key: "cineverse_watchlist"
- Store: Array of movie objects
- Persist across browser sessions
- Clear on demand

UI/UX:
□ Red highlight when in watchlist
□ Toast notification on add/remove
□ Watchlist icon in header with count
□ Empty state message
□ Bulk operations (clear all)

ESTIMATED EFFORT: Medium (5-7 hours)
PRIORITY: MEDIUM

LABELs: feature, watchlist, todo
```

---

### Card 4: User Favorites System
```
TITLE: ❤️ Add Favorites System

DESCRIPTION:
Mark favorite movies and access them quickly.

PROPOSED IMPLEMENTATION:
□ Add favorite/heart button on movie cards
□ Store favorites in localStorage
□ Create "My Favorites" page
□ Show favorite status on cards
□ Favorite counter in header/navigation
□ Quick access to favorites

FEATURES:
□ Heart icon (outline when not favorited, filled when favorited)
□ Animated heart icon click
□ Toast notification on add/remove
□ Favorites section on home page
□ Dedicated favorites page
□ Search within favorites
□ Sort favorites (date added, rating)
□ Share favorite list (optional)

DATA STORAGE:
- localStorage key: "cineverse_favorites"
- Store: Array of movie IDs
- Persist: Across all browser sessions
- Max: No limit (reasonable limit optional)

VISUAL INDICATORS:
□ Filled red heart: Is in favorites
□ Outline heart: Not in favorites
□ Color change on hover
□ Animation on click

ESTIMATED EFFORT: Medium (4-6 hours)
PRIORITY: MEDIUM

LABELs: feature, favorites, todo
```

---

### Card 5: Dark/Light Theme Toggle
```
TITLE: 🌙 Add Theme Switcher

DESCRIPTION:
Implement dark and light theme toggle for better user preference.

PROPOSED IMPLEMENTATION:
□ Add theme toggle button in header
□ Create light theme CSS variant
□ Store theme preference in localStorage
□ Apply theme on page load
□ Smooth theme transition animations
□ Support system preference (optional)

THEMES:

DARK THEME (Current):
- Background: Dark gradient
- Text: White
- Primary: Red (#e50914)
- Cards: Dark with transparency

LIGHT THEME (New):
- Background: Light gradient (white/light gray)
- Text: Dark gray/black
- Primary: Red (#e50914)
- Cards: Light with subtle shadows
- Reduced contrast overlay

FEATURES:
□ Toggle button in header (🌙 / ☀️)
□ Smooth transition between themes
□ Accessibility compliant
□ System preference detection
□ Manual override option
□ Persistent preference

LOCAL STORAGE:
- Key: "cineverse_theme"
- Values: "light" or "dark"
- Default: Follows system preference

ESTIMATED EFFORT: Medium (5-7 hours)
PRIORITY: LOW

LABELs: feature, ui, todo
```

---

## 🐛 ISSUES/BUGS LIST

*Leave empty for now - report issues here as they appear*

```
TEMPLATE FOR NEW BUGS:
TITLE: [BUG] Description of issue

DESCRIPTION:
How to reproduce:
1. Step 1
2. Step 2
3. Step 3

Expected behavior: What should happen

Actual behavior: What actually happens

Browser/Device: Chrome on Windows/iPhone/etc.

LABELs: bug, high-priority (or medium/low)
```

---

## ✨ LABEL COLORS (Create These in Trello)

When setting up labels in Trello, use these colors:

- 🟢 **completed** → Green
- 🔵 **in-progress** → Blue
- 🟣 **feature** → Purple
- 🟡 **bug** → Yellow
- 🔴 **high-priority** → Red
- ⚫ **documentation** → Black/Gray
- 🟠 **deployment** → Orange
- 🩵 **backend** → Light Blue
- 🟤 **ui** → Brown
- 🟣 **api** → Purple

---

## 📝 BOARD DESCRIPTION

Add this to your board info (Click "Show menu" → "About this board"):

```
CineVerse - Professional Movie Website

A modern, fully-featured movie discovery platform built with cutting-edge web technologies.

🎬 FEATURES:
✅ 50+ Movies from TMDB API
✅ Real-time Search by Title/Description
✅ YouTube Trailer Playback
✅ Mobile-First Responsive Design
✅ Professional Netflix-Inspired UI
✅ Auto-Deploy on Git Push
✅ Zero-Configuration Setup

🔗 LINKS:
📱 Website: https://mikeokello.github.io/cineverse/index.html
💻 GitHub: https://github.com/mikeokello/cineverse
🎯 Trello: https://trello.com/b/EabNCCS9/cineverse-movie-website

👨‍💻 DEVELOPER: Mike Okello (@mikeokello)
📅 CREATED: April 2026
🚀 STATUS: Live & Fully Functional

TECH STACK: HTML • CSS • JavaScript • Vite • TMDB API • GitHub Pages

This project demonstrates professional web development practices including:
- Clean code architecture
- RESTful API integration
- Responsive web design
- Version control workflow
- Continuous deployment
- Performance optimization
```

---

## 🎯 HOW TO USE THIS FILE

1. **Copy each card section** (from "TITLE:" to "LABELs:")
2. **Go to your Trello board**: https://trello.com/b/EabNCCS9/cineverse-movie-website
3. **Click "+" Add a card** in the appropriate list
4. **Paste the TITLE** in the card title field
5. **Click on the card** to open it
6. **Click "Edit" on description**
7. **Paste the DESCRIPTION** content
8. **Add labels** by clicking the label icon
9. **Save and close**

Repeat for each card!

---

## ✅ BOARD SETUP CHECKLIST

- [ ] Create 5 lists: Backlog, In Progress, Completed, Documentation, Issues/Bugs
- [ ] Add all cards from "✅ Completed" (7 cards)
- [ ] Add all cards from "📚 Documentation" (3 cards)
- [ ] Add all cards from "🚀 In Progress/Backlog" (5 cards)
- [ ] Create and apply color labels
- [ ] Add board description
- [ ] Invite team members (if applicable)
- [ ] Make board public (for portfolio)
- [ ] Update Trello links in documentation

---

**Your Trello board is now ready to showcase your professional work! 🚀**
