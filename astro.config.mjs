import { defineConfig } from 'astro/config';
import react from '@astrojs/react';        // import React integration
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],   // <- top-level, add React
  vite: {
    plugins: [tailwindcss()],
  },
});