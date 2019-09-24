'use strict';

var autoprefixer = require('autoprefixer');
var minimatch = require('minimatch');
var postcss = require('postcss');

module.exports = async function(str, data) {
  var options = this.config.autoprefixer;
  var path = data.path;
  var exclude = options.exclude;
  if (exclude && !Array.isArray(exclude)) exclude = [exclude];

  if (path && exclude && exclude.length) {
    for (var i = 0, len = exclude.length; i < len; i++) {
      if (minimatch(path, exclude[i])) return str;
    }
  }

  const result = await postcss([autoprefixer(options)]).process(str, {from: path});
  return result.css;
};
