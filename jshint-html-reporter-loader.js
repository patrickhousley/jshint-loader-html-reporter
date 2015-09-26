/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Patrick Housley @patrickhousley
 */
module.exports = function (errors) {
  if (!this._compiler.jshintErrors) {
    this._compiler.jshintErrors = [];
  }

  for (var error in errors) {
    this._compiler.jshintErrors.push({
      file: this.resourcePath,
      error: errors[error]
    });
  }
};