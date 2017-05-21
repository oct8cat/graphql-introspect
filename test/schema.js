const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      message: {
        type: GraphQLString,
        resolve: function () { return 'This is a message' }
      }
    },
  })
})
