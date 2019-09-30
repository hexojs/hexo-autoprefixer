'use strict';

const autoprefixer = require('autoprefixer');
const micromatch = require('micromatch');
const postcss = require('postcss');

module.exports = async function(str, data) {
  const options = this.config.autoprefixer;
  const path = data.path;
  const exclude = options.exclude;
  const globOptions = { basename: true };

  let excludeString = exclude || '';
  if (Array.isArray(exclude)) excludeString = exclude.join('');
  if (excludeString.includes('/')) globOptions.basename = false;

  if (path && exclude && exclude.length) {
    if (micromatch.isMatch(path, exclude, globOptions)) return str;
  }

  const result = await postcss([autoprefixer(options)]).process(str, {from: path});
  return result.css;
};
