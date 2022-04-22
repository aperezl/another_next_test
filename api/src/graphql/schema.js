import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { hello } from './queries'
import { register } from './mutations'

const query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Query Type',
  fields: {
    hello
  }
})



const mutation = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    register
  }
})

export default new GraphQLSchema({
  query,
  mutation
})