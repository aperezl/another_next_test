import { gql, ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";

const cors = Cors();
const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Query {
    getUser: User
  }

  type Mutation {
    revalidate(slug: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    getUser: async (_, __, ctx) => {
      await ctx.revalidate("/");
      return {
        id: "Foo",
        name: "John Doe",
      };
    },
  },
  Mutation: {
    revalidate: async (_, { slug }, ctx) => {
      console.log('slug', slug)
      await ctx.revalidate('/')
      await ctx.revalidate(`/blog/${slug}`)
      return true
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      revalidate: res.unstable_revalidate,
    };
  },
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.send();
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
