# Money Save

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. **Create a repository** on GitHub named `money-saver` (or your preferred name)
2. **Push your code** to the `main` branch

### Deployment Steps

1. **Clone or initialize your GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/money-saver.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment", select **Source: GitHub Actions**

3. **Automatic Deployment:**
   - Every time you push to `main` branch, GitHub Actions will:
     - Build the project with `npm run build:gh-pages`
     - Deploy to GitHub Pages automatically
   - Check the **Actions** tab in your repository to monitor deployment status

4. **Access your deployed app:**
   - It will be available at: `https://YOUR_USERNAME.github.io/money-saver/`

### Manual Deployment (Local)

To build and deploy manually:
```bash
npm run build:gh-pages
```
