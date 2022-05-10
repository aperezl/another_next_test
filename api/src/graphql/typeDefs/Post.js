import { gql } from 'apollo-server'

export const Post = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    author: User
  }

  type Mutation {
    createPost(title: String, body: String): Post
  }
`