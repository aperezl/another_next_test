import { gql, ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import postRepository from "../../repositories/posts";
const cors = Cors();
const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Posts {
    id: ID!
    title: String!
    slug: String!
    body: String!
    published: Boolean!
  }

  input newPostParams {
    title: String!
    slug: String!
    body: String!
    published: Boolean!
  }

 

  type Query {
    getUser: User
    getPosts: [Post]
  }

  type Mutation {
    revalidate(slug: ID!): Boolean
    createPost(params: newPostParams): Boolean
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
    getPosts: async (_, __, ctx) => {
      return ctx.postRepository.getPublishedPosts();
    }
  },
  Mutation: {
    revalidate: async (_, { slug }, ctx) => {
      console.log('slug', slug)
      await ctx.revalidate('/')
      await ctx.revalidate(`/blog/${slug}`)
      return true
    },
    createPost: async (_, { params }, ctx) => {
      const newPost = await ctx.postRepository.createPost(params)
      return newPost

    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      revalidate: res.unstable_revalidate,
      postRepository: postRepository(),
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
