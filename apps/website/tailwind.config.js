const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const preset = require('../../tailwind.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...preset,
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: { ...preset.theme },
  },
  corePlugins: {
    extend: { ...preset.corePlugins },
  },
  plugins: [...preset.plugins],
};
