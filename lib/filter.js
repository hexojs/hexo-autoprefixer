var autoprefixer = require('autoprefixer-core');
var assign = require('object-assign');
var minimatch = require('minimatch');

module.exports = function(str, data){
  var options = this.config.autoprefixer;
  var path = data.path;
  var exclude = options.exclude;
  if (exclude && !Array.isArray(exclude)) exclude = [exclude];

  if (path && exclude && exclude.length){
    for (var i = 0, len = exclude.length; i < len; i++){
      if (minimatch(path, exclude[i])) return str;
    }
  }

  var result = autoprefixer(options).process(str, {from: data.path});

  return result.css;
};