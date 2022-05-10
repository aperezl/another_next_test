// Utils
import { validator } from '../util/validator'
import { createJWT } from '../util/auth'

// Repositories
import userMongoRepository from '../repositories/userMongoRepository'
import postMongoRepository from '../repositories/postMongoRepository'

// Controllers
import { makeLoginController, makeRegisterController } from '../controllers/auth'
import { makeCreatePostController } from '../controllers/post'
import { makeGetUsersController, makeGetUserController } from '../controllers/user'

// Compose LoginController
const userRepository = userMongoRepository()
const postRepository = postMongoRepository()

// Compose Controllers
const loginController = makeLoginController({ userRepository, createJWT })
const registerController = makeRegisterController({ userRepository, createJWT, validator})
const createPostController = makeCreatePostController({ postRepository })
const getUsersController = makeGetUsersController({ userRepository })
const getUserController = makeGetUserController({ userRepository })

// types (to delete)
import { Post, Role, User } from './typeDefs'
import { makeLoginMutation } from './mutations/auth/login'
import { makeRegisterMutation } from './mutations/auth/register'
import { makeCreatePostMutation } from './mutations/post/create'
import { makeUserQuery, makeUsersQuery } from './queries/user'

export default function makeSchema () { 

  const resolvers = {
    Query: {
      users: makeUsersQuery({ getUsersController}),
      user: makeUserQuery({ getUserController })
    },
    Mutation: {
      login: makeLoginMutation({ loginController }),
      register: makeRegisterMutation({ registerController }),
      createPost: makeCreatePostMutation({ createPostController })
    },
    Post: {
      author: async ({ authorId }) => {
        const user = await getUserController(authorId)
        console.log({ user, authorId })
        return user
      }
    }
  }

  return {
    typeDefs: [Post, User, Role],
    resolvers
  }

}
