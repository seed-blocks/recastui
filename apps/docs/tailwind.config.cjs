const sharedConfig = require('@recastui/tailwind-config/tailwind.config.js');

module.exports = {
  // enables tailwind IntelliSense for all file types
  content: [
    './src/**/*.{astro,js,jsx,md,mdx,ts,tsx}',
    '../../packages/**/src/**/*.{astro,js,jsx,md,mdx,ts,tsx}',
  ],
  darkMode: 'class',
  ...sharedConfig,
};
