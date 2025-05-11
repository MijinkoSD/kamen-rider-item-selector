import { resolve } from 'node:path'
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import importPlugin from 'eslint-plugin-import'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

const rootGitignorePath = resolve(import.meta.dirname, '../.gitignore')
const gitignorePath = resolve(import.meta.dirname, '/.gitignore')

export default defineConfigWithVueTs(
  // 含めるファイル
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  // 除外するファイル
  includeIgnoreFile(rootGitignorePath),
  includeIgnoreFile(gitignorePath),
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
    ],
  },

  // Vueの設定
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  // Vitestの設定
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // Playwrightの設定
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  skipFormatting,

  // プラグインの設定
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts,vue}'],
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-misused-promises': 'error',
      'import/no-deprecated': 'warn',
      'import/extensions': [
        'warn',
        'ignorePackages',
      ],
    },
  },
)
