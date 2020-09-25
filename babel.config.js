module.exports = function (api) {
  api.cache(true)

  const presets = [
    ['@babel/react'],
    ['@babel/typescript'],
    ['@babel/env', { modules: false, useBuiltIns: 'usage', corejs: { version: 3, proposals: true } }]
  ]

  const plugins = [
    ['react-hot-loader/babel'],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['module-resolver', {
      root: ['.'],
      alias: { '@': './src' }
    }],
    ['styled-components']
  ]

  return {
    presets,
    plugins
  }
}
