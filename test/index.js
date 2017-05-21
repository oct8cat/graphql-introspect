const path = require('path')
const assert = require('assert')
const {introspect} = require('..')

describe('introspect', function () {
  it('should handle GraphQL server URLs', function () {
    return introspect('http://try.sangria-graphql.org/graphql').then(validateOut)
  })
  it('should handle schema module paths', function () {
    return introspect(path.resolve(__dirname, 'schema')).then(validateOut)
  })
})

function validateOut (out) {
  return out.match(/Query/)
}
