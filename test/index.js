'use strict';

require('chai').use(require('chai-as-promised')).should();
var prefixer = require('../lib/filter');

const unprefixed = 'div { user-select: none; }';
const prefixed = 'div { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }';

describe('hexo-autoprefixer', function() {
  it('should prefix fullscreen with no excludes', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: null
        }
      }
    };
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });

  it('should prefix fullscreen with string exclude', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    };
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    newCSS.should.become(prefixed);
  });

  it('should not prefix fullscreen with exclude match', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: '/**/*.styl'
        }
      }
    };
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/baz.styl'
    });

    newCSS.should.become(unprefixed);
  });
});
