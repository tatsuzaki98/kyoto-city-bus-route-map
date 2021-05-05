const {merge} = require('webpack-merge');
const client = require('./webpack-client.js');
const path = require('path');

module.exports = merge(client, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    publicPath: '/static',
    contentBase: path.resolve('public'),
    openPage: 'index.html',
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false,
        logLevel: 'debug',
      },
    },
  },
});
