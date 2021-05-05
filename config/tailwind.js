const path = require('path');

module.exports = {
  purge: {
    enabled: true,
    content: [
      path.resolve('client/**/*.tsx'),
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
