const fs = require('fs')
const { resolve } = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

const gitRevisionPlugin = new GitRevisionPlugin({ branch: true, versionCommand: 'describe --tags --abbrev=0' })

const nodeEnv = process.env.NODE_ENV
const envConfigPath = fs.existsSync(`./.env.${nodeEnv}`)
  ? `./.env.${nodeEnv}`
  : './.env'

const buildTime = new Date().toISOString()

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        include: /node_modules/,
        use: ['source-map-loader']
      }
    ]
  },
  plugins: [
    new DotenvPlugin({
      path: envConfigPath,
      safe: true,
      expand: true,
      systemvars: true
    }),
    gitRevisionPlugin,
    new webpack.DefinePlugin({
      '__BUILD_VERSION': JSON.stringify(gitRevisionPlugin.version()),
      '__BUILD_COMMIT': JSON.stringify(gitRevisionPlugin.commithash()),
      '__BUILD_BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
      '__BUILD_DATE': JSON.stringify(buildTime)
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: resolve('public/index.ejs'),
      templateParameters: {
        buildBranch: gitRevisionPlugin.branch(),
        buildDate: buildTime,
        buildSha: gitRevisionPlugin.commithash().substring(0, 7),
        buildVersion: gitRevisionPlugin.version(),
        title: 'Area2K React Seed'
      }
    })
  ]
}
