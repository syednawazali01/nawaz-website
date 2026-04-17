# Nawaz Portfolio

A personal portfolio website built with React, TypeScript, and Vite.

This project presents my background as a CSE student with AIML specialization, along with my interests in AI and ML, computer networks, cybersecurity, and project-based learning.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Features

- Responsive personal portfolio layout
- About, projects, skills, and contact sections
- Clean component-based structure
- Project data separated from UI for easier updates
- Simple setup for local development and production builds


## Run Locally

To run this project on your PC:

1. Install [Node.js](https://nodejs.org/).
2. Download or clone this repository.
3. Open the project folder in a terminal.
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

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

## Notes

- Portfolio content is stored in `src/data/`.
- Reusable page sections are stored in `src/components/sections/`.
- The projects section is handled in `src/components/Projects.tsx`.
- The main Vite config file is `vite.config.ts`.
