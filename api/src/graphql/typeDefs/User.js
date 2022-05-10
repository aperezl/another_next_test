import { gql } from 'apollo-server'

export const User = gql`
type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  displayName: String!
  role: [Role]
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