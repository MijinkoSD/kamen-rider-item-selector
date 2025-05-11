/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  $schema: 'https://json.schemastore.org/prettierrc',
  trailingComma: 'none',
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  plugins: [
    'prettier-plugin-multiline-arrays',
  ],
  multilineArraysWrapThreshold: 2,
  experimentalOperatorPosition: 'start',
}

export default config
