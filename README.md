# graphql-introspect

CLI tool for building GraphQL schemas representation in the Schema Language format
from [GraphQLSchema](http://graphql.org/graphql-js/type/#graphqlschema) object
or GraphQL server URL.

[![wercker status](https://app.wercker.com/status/e590361ccce6a245df73e8776c86d2f6/m/ "wercker status")](https://app.wercker.com/project/byKey/e590361ccce6a245df73e8776c86d2f6)

## Installation

```
npm install -g graphql-introspect
```

## Usage

### Using remote GraphQL server URL

```
$ graphql-introspect http://example.com/graphql
```

### Using local schema module

```
$ graphql-introspect /path/to/schema.js
```

(See an example of local schema module in `test/schema.js`)

## Output

`graphql-introspect` writes its output to `STDOUT`. To save a schema to a file
use output redirection:

```
$ graphql-introspect /path/to/schema.js > /path/to/schema.graphql
```

## API

```javascript
const {
  introspect,
  introspectURL,
  introspectFile
} = require('graphql-introspect')

introspect('http://example.com/graphql').then(out => {...}).catch(err => {...})
// Same as 
introspectURL('http://example.com/graphql').then(out => {...}).catch(err => {...})

introspect('/path/to/schema.js').then(out => {...}).catch(err => {...})
// Same as 
introspectFile('/path/to/schema.js').then(out => {...}).catch(err => {...})
```
