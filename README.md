# Pokémon Explorer

A responsive Pokémon Explorer built with Next.js, TypeScript, and Tailwind CSS, fetching data from [PokeAPI](https://pokeapi.co).

- Homepage listing the original 151 Pokémon with a live name search
- Detail page per Pokémon with image, types, abilities, base stats, and moves
- Statically generated (SSG) homepage and detail routes for fast performance

## Prerequisites

- [Node.js](https://nodejs.org) 20 or later
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github-personal:saimulagada/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Other Commands

```bash
npm run build   # Create a production build
npm run start   # Serve the production build (run after npm run build)
npm run lint    # Run ESLint
```

## Project Structure

```
src/
  app/
    page.tsx                 Homepage (Pokémon list + search)
    pokemon/[id]/page.tsx    Pokémon detail page
  components/                UI components (search bar, cards, stat bars, etc.)
  lib/                       PokeAPI data fetching and helpers
  types/                     Shared TypeScript types
```
