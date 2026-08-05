// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['dist/', '.astro/', 'node_modules/', '.wrangler/']
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // TypeScript already reports undefined references (and understands
      // ambient/global types like `ImageMetadata`); core no-undef doesn't.
      'no-undef': 'off'
    }
  }
);
