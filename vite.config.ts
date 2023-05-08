/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    svgrPlugin(),
    tsconfigPaths(),
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src']
    }),
    checker({
      typescript: true
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    minify: false,
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'reagraph',
      fileName: 'reagraph'
    },
    rollupOptions: {
      plugins: [
        external({
          includeDependencies: true
        })
      ]
    }
  }
});
