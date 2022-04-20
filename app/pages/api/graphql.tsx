import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import makeContext from '../../graphql/makeContext'
import { resolvers } from '../../graphql/resolvers'
import { typeDefs } from '../../graphql/typeDefs'
import postRepository from '../../repositories/posts'

const cors = Cors()

const context = makeContext({ postRepository: postRepository() })
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

const startServer = apolloServer.start()

export default cors(async function handler (req, res) {
  if (req.method === 'OPTIONS') {
    return res.end()
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}
