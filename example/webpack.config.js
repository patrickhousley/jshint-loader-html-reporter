var path = require('path');
var jshintLoaderHtmlReporter = require('../index');
module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'out'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'jshint-loader'}
    ]
  },
  jshint: {
    camelcase: true,
    reporter: jshintLoaderHtmlReporter.jshintLoaderReporter
  },
  plugins: [
    new jshintLoaderHtmlReporter.jshintReporterPlugin({
      //outputFileName: 'example.html',
      outputPath: path.join(__dirname, 'out', 'out')
    })
  ]
};