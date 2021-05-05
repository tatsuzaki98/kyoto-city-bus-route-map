const path = require('path');

module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {
      config: ctx.env === 'production' ?
        path.resolve('config/tailwind.js') :
        path.resolve('config/tailwind-dev.js'),
    },
    autoprefixer: {},
    // cssnano: {},
  },
});
