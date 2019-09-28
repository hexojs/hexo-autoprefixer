'use strict';

const autoprefixer = require('autoprefixer');
const micromatch = require('micromatch');
const postcss = require('postcss');

module.exports = async function(str, data) {
  const options = this.config.autoprefixer;
  const path = data.path;
  const exclude = options.exclude;

  if (path && exclude && exclude.length) {
    if (micromatch.isMatch(path, exclude, { basename: true })) return str;
  }

  const result = await postcss([autoprefixer(options)]).process(str, {from: path});
  return result.css;
};
