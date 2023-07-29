# hexo-autoprefixer

[![Build Status](https://img.shields.io/github/actions/workflow/status/hexojs/hexo-autoprefixer/tester.yml?branch=master&label=test)](https://github.com/hexojs/hexo-autoprefixer/actions?query=workflow%3ATester)
[![npm version](https://badge.fury.io/js/hexo-autoprefixer.svg)](https://www.npmjs.com/package/hexo-autoprefixer)
[![Coverage Status](https://coveralls.io/repos/hexojs/hexo-autoprefixer/badge.svg?branch=master&service=github)](https://coveralls.io/github/hexojs/hexo-autoprefixer?branch=master)

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
```

- **exclude**: Exclude files

In `hexo-autoprefixer@2.0.0` please specify `browser` option in `package.json` or `.browserslistrc` instead of `_config.yaml`. Please see [Browserslist: Config file](https://github.com/browserslist/browserslist#config-file).

See <https://github.com/postcss/autoprefixer>

[Autoprefixer]: https://github.com/postcss/autoprefixer
