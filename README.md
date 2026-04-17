# Nawaz Website

Personal portfolio website for Nawaz, built with React, TypeScript, and Vite.

## Overview

This project showcases Nawaz's profile, skills, projects, and contact information in a responsive single-page portfolio.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Features

- Responsive portfolio layout for desktop and mobile
- Dedicated sections for hero, about, skills, projects, and contact
- Component-based structure for easier maintenance
- Centralized content files for simple updates
- Production-ready build and GitHub Pages deployment setup

## Local Development

1. Install [Node.js](https://nodejs.org/).
2. Clone this repository or download the project.
3. Open the project folder in a terminal.
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run preview
```

Previews the production build locally.

## Project Structure

```text
src/
  components/
    sections/
    Projects.tsx
  data/
  App.tsx
  main.tsx
  styles.css
```

## Deployment

This repository is configured for deployment with GitHub Pages.

After GitHub Pages is enabled in the repository settings, the site will be published from the GitHub Actions workflow at:

`https://syednawazali01.github.io/nawaz-website/`

## Notes

- Portfolio content is stored in `src/data/`.
- Reusable page sections are stored in `src/components/sections/`.
- Main build configuration lives in `vite.config.ts`.
