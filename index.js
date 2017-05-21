const path = require('path')

function getURLMatch (s) {
  return s.match(/^(http[s]?):\/\//)
}

function introspect (from) {
  return Promise.resolve(getURLMatch(from) ? introspectURL(from) : introspectFile(from))
}

function introspectURL (url) {
  return new Promise(function (resolve, reject) {
    const {introspectionQuery, buildClientSchema, printSchema} = require('graphql/utilities')
    const http = require(getURLMatch(url)[1])
    const req = http.get(`${url}?query=${introspectionQuery}`, function (res) {
      let text = ''
      res
        .on('error', reject)
        .on('data', function (data) { text += data })
        .on('end', function() {
          try {
            const json = JSON.parse(text)
            const schema = buildClientSchema(json.data)
            resolve(printSchema(schema))
          } catch (err) {
            reject(err)
          }
        })
    }).on('error', reject)
  })
}

function introspectFile (file) {
  try {
    const schema = require(path.resolve(file))
    // Prefer schema package's own `graphql` module.
    if (module.children.length) module.paths = module.children[0].paths
    const {printSchema} = require('graphql/utilities')
    return printSchema(schema)
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  introspect,
  introspectURL,
  introspectFile
}
