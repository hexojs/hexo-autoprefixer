'use strict';

require('chai').use(require('chai-as-promised')).should();
const prefixer = require('../lib/filter');

const unprefixed = 'div { user-select: none; }';
const prefixed = 'div { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }';

describe('hexo-autoprefixer', () => {
  it('should prefix user-select with no excludes', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: null
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });

  it('should prefix user-select with string exclude', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });

  it('should not prefix - exclude match', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/baz.styl'
    });

    newCSS.should.become(unprefixed);
  });

  it('should not prefix - exclude with slash', () => {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '/**/*.styl'
        }
      }
    };
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/foo/bar/baz.styl'
    });

    newCSS.should.become(unprefixed);
  });
});
