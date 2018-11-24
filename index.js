/* global hexo */

'use strict';

hexo.config.autoprefixer = Object.assign({
  exclude: ['*.min.css']
}, hexo.config.autoprefixer);

hexo.extend.filter.register('after_render:css', require('./lib/filter'));
