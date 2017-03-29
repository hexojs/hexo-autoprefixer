# hexo-autoprefixer

[![Build Status](https://travis-ci.org/hexojs/hexo-autoprefixer.svg?branch=master)](https://travis-ci.org/hexojs/hexo-autoprefixer) [![npm version](https://badge.fury.io/js/hexo-autoprefixer.svg)](https://badge.fury.io/js/hexo-autoprefixer) [![Coverage Status](https://coveralls.io/repos/hexojs/hexo-autoprefixer/badge.svg?branch=master&service=github)](https://coveralls.io/github/hexojs/hexo-autoprefixer?branch=master)

[Autoprefixer] plugin for Hexo.

## Installation

``` bash
$ npm install hexo-autoprefixer --save
```

## Options

Configure Autoprefixer in your Hexo config.

``` yaml
autoprefixer:
  exclude:
    - '*.min.css'
  browsers:
    - 'last 2 versions'
```

- **exclude**: Exclude files

See <https://github.com/postcss/autoprefixer>

[Autoprefixer]: https://github.com/postcss/autoprefixer
