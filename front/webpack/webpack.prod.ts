import TerserPlugin from 'terser-webpack-plugin';

const { merge } = require('webpack-merge');
const commonProd = require('./webpack.common.ts');

module.exports = merge(commonProd, {
  mode: 'production',
  optimization: {
    splitChunks: { chunks: 'all' },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
