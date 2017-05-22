#!/usr/bin/env node

const {introspect} = require('..')

const [from] = process.argv.slice(2)
if (!from) {
  console.log('Usage: graphql-introspect <path|URL>')
  process.exit(0)
}

introspect(from)
  .then(out => console.log(out))
  .catch(err => console.error(err))
