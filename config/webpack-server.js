const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: {
    'server': './server',
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        configFile: path.resolve('config/tsconfig.json'),
      },
    }],
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.ts'],
  },
};
