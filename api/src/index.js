import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import makeSchema from './graphql/schema'
import userMongoRepository from './repositories/userMongoRepository'
import postMongoRepository from './repositories/postMongoRepository'

import { connectDB }  from './db/mongodb'
import authenticate from './middlewares/auth'



const startSever = async () => {
  await connectDB()
  const userRepository = userMongoRepository()
  const postRepository = postMongoRepository()
  const server = new ApolloServer({
    schema: makeSchema({ userRepository, postRepository }),
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