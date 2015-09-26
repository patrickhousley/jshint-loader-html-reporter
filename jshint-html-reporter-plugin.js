/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Patrick Housley @patrickhousley
 */
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var htmlReporter = require('./lib/jshint-html-reporter/reporter');

function JSHintHtmlReporter(opts) {
  this.options = {
    outputPath: path.join(__dirname, 'output'),
    outputFileName: 'jshint-report.html'
  };

  if (opts && opts.outputPath) {
    this.options.outputPath = opts.outputPath;
  }

  if (opts && opts.outputFileName) {
    this.options.outputFileName = opts.outputFileName;
  }
}

JSHintHtmlReporter.prototype.apply = function (compiler) {
  compiler.plugin('after-compile', function (compilation) {
    var jshintErrors = compiler.jshintErrors;
    var html = htmlReporter.reporter(jshintErrors);

    mkdirp(this.options.outputPath, function (err) {
      if (err) {
        return console.log(err);
      }

      fs.writeFile(path.join(this.options.outputPath, this.options.outputFileName), html, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    }.bind(this));
  }.bind(this));
};

module.exports = JSHintHtmlReporter;