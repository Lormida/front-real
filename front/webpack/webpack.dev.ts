const path = require('path');
const { merge } = require('webpack-merge');
const commonDev = require('./webpack.common.ts');

module.exports = merge(commonDev, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/'),
    },
    client: {
      overlay: true,
    },
    port: 3000,
  },
});
