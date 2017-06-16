const webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  pkg = require('../package.json');

module.exports = (options) => ({
  entry: {
    [pkg.name]: './src/video-feed.component.js'
  },
  externals: {
    'angular': 'angular'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(options.min ? `${pkg.name}.min.css` : `${pkg.name}.css`, {
      allChunks: true
    })
  ]
});