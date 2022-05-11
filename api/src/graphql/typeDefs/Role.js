import { gql } from 'apollo-server'

export const Role = gql`
  type Role {
    id: ID!
    name: String!
    permissions: [String]
  }
`