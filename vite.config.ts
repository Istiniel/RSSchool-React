/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="cypress" />

import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import istanbul from 'vite-plugin-istanbul';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), istanbul({ cypress: true, requireEnv: false })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude,
        'src/main.tsx',
        '/node_modules/',
        '/dist/',
        '/cypress/',
        '/.{idea,git,cache,output,temp}/',
        '/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '/vite-env.d.ts',
        '/*.test.tsx',
        '/main.tsx',
      ],
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/abstracts/_index.scss" as *;`,
      },
    },
  },
});
