const webpack = require('webpack')
const merge = require('webpack-merge')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

const commonConfig = require('./common.config')

const serveConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: ['react-hot-loader/patch', './src'],
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    port: 8080,
    hot: true
  },
  watchOptions: {
    ignored: ['node_modules'],
    poll: 1000
  },
  resolve: {
    alias: {
      'react': require.resolve('../node_modules/react'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new DuplicatePackageCheckerPlugin({ verbose: true })
  ]
}

module.exports = merge(commonConfig, serveConfig)
