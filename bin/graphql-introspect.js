#!/usr/bin/env node

const {introspect} = require('..')

const [from] = process.argv.slice(2)
if (!from) return 'Usage: graphql-introspect <path|URL>'

introspect(from)
  .then(out => console.log(out))
  .catch(err => console.error(err))
