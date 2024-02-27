module.exports = {
  bracketSameLine: false,
  bracketSpacing: true,
  eslintIntegration: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['.babelrc.js'],
      options: {
        trailingComma: 'es5',
        parser: 'json',
      },
    },
  ],
  plugins: [
    require('prettier-plugin-prisma'),
    require('@trivago/prettier-plugin-sort-imports'),
    require('prettier-plugin-sort-json'),
    require('prettier-plugin-tailwindcss'),
  ],
  importOrder: [
    '^(react-dom|react)($|/)',
    '<THIRD_PARTY_MODULES>',
    '^[.]{2}',
    '^[.](/|$)',
    `[.](css|scss|less|sass|styl|png|jpg|jpeg|gif|svg|ttf|woff|woff2|eot|otf)$`,
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderGroupNamespaceSpecifiers: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tabWidth: 2,
  jsonRecursiveSort: true,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  stylelintIntegration: false,
  tailwindConfig: './tailwind.preset.js',
  trailingComma: 'all',
  tslintIntegration: true,
};