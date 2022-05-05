import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { users, user } from './queries'
import { register, login, createPost } from './mutations'

const query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Query Type',
  fields: {
    users,
    user
  }
})



const mutation = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    register,
    login,
    createPost
  }
})

export default new GraphQLSchema({
  query,
  mutation
})