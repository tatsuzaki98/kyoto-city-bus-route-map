const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'client': './client',
    // 'components': './client/components',
  },
  output: {
    path: path.resolve(`build/static`),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve('config/tsconfig.json'),
        },
      },
      {
        test: /\.pcss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              }}}]},
    ],
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.ts', '.js', '.tsx'],
  },
};
