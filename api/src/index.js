import 'dotenv/config'
import { ApolloServer, gql } from 'apollo-server'
import schema from './graphql/schema'
import mongoRepository from './repositories/mongoRepository'
import { connectDB }  from './db/mongodb'



const startSever = async () => {
  const db = await connectDB()
  const userRepository = await mongoRepository({ db })
  const server = new ApolloServer({
    schema,
    context: {
      userRepository
    }
  })
  const { url } = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`🚀  Server ready at ${url}`)
}

startSever()