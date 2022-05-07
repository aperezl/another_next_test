import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { User } from './User'

export const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'Post Type',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: User,
      resolve: ({ authorId }, _, { userRepository }) => {
        return userRepository.findById(authorId)
      }
    }
  }
})