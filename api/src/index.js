import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import schema from './graphql/schema'
import userMongoRepository from './repositories/userMongoRepository'
import postMongoRepository from './repositories/postMongoRepository'

import { connectDB }  from './db/mongodb'
import authenticate from '../middlewares/auth'



const startSever = async () => {
  const db = await connectDB()
  const userRepository = await userMongoRepository({ db })
  const postRepository = await postMongoRepository({ db })
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      userRepository,
      postRepository,
      auth: authenticate(req)
    })
  })
  const { url } = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`🚀  Server ready at ${url}`)
}

startSever()