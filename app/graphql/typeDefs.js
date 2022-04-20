import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type User {
    id: ID
    name: String
  }

  type Post {
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
    createPost(params: newPostParams): Post
  }
`
