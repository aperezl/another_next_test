import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { makeUser, makeUsers } from './queries/user'
import { makeLogin, makeRegister } from './mutations/auth'
import { makeCreatePost } from './mutations/post'
import { createJWT } from '../util/auth'

export default function makeSchema ({ userRepository, postRepository }) {
  const query = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Query Type',
    fields: {
      users: makeUsers({ userRepository }),
      user: makeUser({ userRepository })
    }
  })

  const mutation = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
      register: makeRegister({ userRepository, createJWT }),
      login: makeLogin({ userRepository, createJWT }),
      createPost: makeCreatePost({ postRepository })
    }
  })

  return new GraphQLSchema({
    query,
    mutation
  })
}
