module.exports = {
  plugins: [
    require('@trivago/prettier-plugin-sort-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
  semi: false,
  singleQuote: false,
  printWidth: 100,
  trailingComma: 'es5',
  arrowParens: 'always',
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  bracketSpacing: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
