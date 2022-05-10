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
import { User, Post } from './types'
import { gql } from 'apollo-server-express'

export default function makeSchema () {
  const query = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Query Type',
    fields: {
      users: makeUsers({ getUsersController }),
      user: makeUser({ getUserController })
    }
  })

  const mutation = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields: {
      register: makeRegister({ registerController }),
      login: makeLogin({ loginController }),
      createPost: makeCreatePost({ createPostController }),
      
    },
  })


  ////////

  const typeDefs = gql`
    type Post {
      id: ID!
      title: String!
      body: String!
      author: User
    }

    type User {
      id: ID!
      username: String!
      email: String!
      password: String!
      displayName: String!
      posts: [Post]
    }

    type Query {
      users: [User]
      user(id: ID): User
    }

    type Mutation {
      register(username: String, password: String, email: String, displayName: String): String
      login(email: String, password: String): String
      createPost(title: String, body: String): Post
    }
  `

  const resolvers = {
    Query: {
      users: async () => await getUsersController(),
      user: async (_, { id }) => await getUserController(id)
    },
    Mutation: {
      login: async (_, { email, password }) => await loginController({ email, password }),
      register: async (_, args) => await registerController(args),
      createPost: async (_, { title, body }, { auth }) => {
        const authorId = auth.user._id
        return await createPostController({ title, authorId, body })
      }
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
    typeDefs,
    resolvers
  }

  return new GraphQLSchema({
    query,
    mutation
  })
}
