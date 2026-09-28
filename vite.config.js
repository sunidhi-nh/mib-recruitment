import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration for Campus Connect React Application
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
});
