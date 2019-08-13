'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prod.env')

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/lib/index.js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'vue-pp-components.js',
    library: 'vue-pp-components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console:true,
          drop_debugger: true,
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? {safe: true, map: {inline: false}}
        : {safe: true}
    }),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new ExtractTextPlugin({
      filename: '../dist/vpc.css',
      // allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/mytheme'),
        to: path.resolve(__dirname, '../dist/mytheme'),
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = webpackConfig
