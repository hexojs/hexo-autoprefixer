'use strict';

var should = require('chai').should(); // eslint-disable-line
var prefixer = require('../lib/filter');

var nonStandards = [ '-webkit-', '-moz-' ];

function makeCSS(prefix) {
  var isNS = nonStandards.indexOf(prefix) !== -1;

  return ':%s%d div { color: white;  }'
    .replace('%s', prefix || '')
    .replace('%d', isNS ? 'full-screen' : 'fullscreen');
}

describe('hexo-autoprefixer', function() {
  it('should prefix fullscreen with no excludes', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: null
        }
      }
    };
    var unprefixed = makeCSS();
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    ['-webkit-', '-moz-', '-ms-'].map(makeCSS).concat(unprefixed).join('\n').should.eql(newCSS);
  });

  it('should prefix fullscreen with string exclude', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    };
    var unprefixed = makeCSS();
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    });

    ['-webkit-', '-moz-', '-ms-'].map(makeCSS).concat(unprefixed).join('\n').should.eql(newCSS);
  });

  it('should not prefix fullscreen with exclude match', function() {
    var ctx = {
      config: {
        autoprefixer: {
          exclude: '/**/*.styl'
        }
      }
    };
    var unprefixed = makeCSS();
    var newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/baz.styl'
    });

    unprefixed.should.eql(newCSS);
  });
});
