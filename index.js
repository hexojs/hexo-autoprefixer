/* global hexo */

'use strict';

var assign = require('object-assign');

hexo.config.autoprefixer = assign({
  exclude: ['*.min.css']
}, hexo.config.autoprefixer);

hexo.extend.filter.register('after_render:css', require('./lib/filter'));
