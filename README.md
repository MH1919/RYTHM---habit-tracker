# Habit Tracker

A modern habit tracking application built with React, TypeScript, Tailwind CSS, and Supabase.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- date-fns
- Supabase

## Project Structure

```
src/
  ├── components/     # React components
  ├── lib/           # Library configurations (e.g., Supabase client)
  ├── types/         # TypeScript type definitions
  ├── hooks/         # Custom React hooks
  └── utils/         # Utility functions
```
