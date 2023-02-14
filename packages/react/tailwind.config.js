const sharedConfig = require("@recastui/tailwind-config/tailwind.config.js");

module.exports = {
  content: ['./src/**/*.{md,mdx,ts,tsx}'],
  darkMode: 'class',
  ...sharedConfig,
};
