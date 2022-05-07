import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { makeUser, makeUsers } from './queries/user'
import { makeLogin, makeRegister } from './mutations/auth'
import { makecreatePost } from './mutations/postMutations'
import { createJWT } from '../util/auth'

export default function makeSchema ({ userRepository, postRepository }) {
  console.log({ userRepository })
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
      createPost: makecreatePost({ postRepository })
    }
  })

  return new GraphQLSchema({
    query,
    mutation
  })
}
