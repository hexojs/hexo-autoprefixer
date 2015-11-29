const Assert = require('assert')

const prefixer = require('../lib/filter')

const nonStandards = [ '-webkit-', '-moz-' ]

function makeCSS (prefix) {
  const isNS = nonStandards.indexOf(prefix) !== -1

  return ':%s%d div { color: white;  }'
           .replace('%s', prefix || '')
           .replace('%d', isNS ? 'full-screen' : 'fullscreen')
}

describe('hexo-autoprefixer', function () {
  it('should prefix fullscreen with no excludes', function () {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: null
        }
      }
    }
    const unprefixed = makeCSS()
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    })

    return Assert.equal(newCSS, [ '-webkit-', '-moz-', '-ms-' ]
                                  .map(makeCSS)
                                  .concat(unprefixed).join('\n'))
  })

  it('should prefix fullscreen with string exclude', function () {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '*.styl'
        }
      }
    }
    const unprefixed = makeCSS()
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/foo/bar/baz.css'
    })

    return Assert.equal(newCSS, [ '-webkit-', '-moz-', '-ms-' ]
                                  .map(makeCSS)
                                  .concat(unprefixed).join('\n'))
  })

  it('should not prefix fullscreen with exclude match', function () {
    const ctx = {
      config: {
        autoprefixer: {
          exclude: '/**/*.styl'
        }
      }
    }
    const unprefixed = makeCSS()
    const newCSS = prefixer.call(ctx, unprefixed, {
      path: '/usr/baz.styl'
    })

    return Assert.equal(newCSS, unprefixed)
  })
})
