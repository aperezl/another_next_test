import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import makeSchema from './graphql/schema'
import { connectDB }  from './db/mongodb'
import authenticate from './middlewares/auth'

console.log(makeSchema())
const { typeDefs, resolvers } = makeSchema()
const startSever = async () => {
  await connectDB()
  const server = new ApolloServer({
    // schema: makeSchema(),
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      auth: authenticate(req)
    })
  })
  const { url } = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`🚀  Server ready at ${url}`)
}

startSever()