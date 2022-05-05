import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const User = new GraphQLObjectType({
  name: 'User',
  description: 'User Type',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
})

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