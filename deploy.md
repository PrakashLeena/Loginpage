# Deployment Instructions

## Option 1: Manual Netlify Deployment
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com) and sign in
3. Drag and drop the `build` folder to deploy
4. Set environment variable: `REACT_APP_API_URL=your-backend-url`

## Option 2: Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

## Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
3. Add homepage field: `"homepage": "https://yourusername.github.io/netflix-app"`
4. Run: `npm run deploy`

## Current Configuration
- ✅ netlify.toml created
- ✅ Environment variables configured
- ✅ Localhost references fixed
- ✅ Build configuration optimized
