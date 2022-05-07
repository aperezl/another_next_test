import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { makeUser, makeUsers } from './queries/user'
import { makeLogin, makeRegister } from './mutations/auth'
import { makeCreatePost } from './mutations/post'
import { createJWT } from '../util/auth'

// Utils
import { validator } from '../util/validator'

// Repositories
import userMongoRepository from '../repositories/userMongoRepository'
import postMongoRepository from '../repositories/postMongoRepository'

// Controllers
import { makeLoginController, makeRegisterController } from '../controllers/auth'
import { makeCreatePostController } from '../controllers/post'

// Compose LoginController
const userRepository = userMongoRepository()
const postRepository = postMongoRepository()

// Compose Controllers
const loginController = makeLoginController({ userRepository, createJWT })
const registerController = makeRegisterController({ userRepository, createJWT, validator})
const createPostController = makeCreatePostController({ postRepository })
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
      register: makeRegister({ registerController }),
      login: makeLogin({ loginController }),
      createPost: makeCreatePost({ createPostController })
    }
  })

  return new GraphQLSchema({
    query,
    mutation
  })
}
