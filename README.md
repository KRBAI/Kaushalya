# Kaushalya

This workspace now contains a component-based React + Vite portfolio instead of a single monolithic HTML file.

## Structure

- `index.html` bootstraps the React app.
- `src/App.jsx` holds the shell and view switching.
- `src/pages/` contains the Home, Blog, and About views.
- `src/components/` contains reusable UI pieces like the header, footer, reveal wrapper, newsletter form, and animated background canvas.
- `src/data/siteContent.js` keeps the portfolio content in one data layer so the pages stay maintainable.

## Run

1. Install dependencies with `npm install`.
2. Start development with `npm run dev`.
3. Build for production with `npm run build`.

## Notes

- The original single-file HTML page is still in the workspace as a legacy reference.
- The React version keeps the same portfolio content while making future updates easier to split into smaller files.
