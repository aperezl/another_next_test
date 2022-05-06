import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { makeUser, makeUsers } from './queries'
import { makeLogin, makeRegister, makecreatePost } from './mutations'

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
      register: makeRegister({ userRepository }),
      login: makeLogin({ userRepository }),
      createPost: makecreatePost({ postRepository })
    }
  })

  return new GraphQLSchema({
    query,
    mutation
  })
}
