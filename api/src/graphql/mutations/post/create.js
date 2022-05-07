import { GraphQLString } from "graphql";
import { Post } from '../../types'

export const makeCreatePost = ({ postRepository }) => ({
  type: Post,
  description: 'Create a new post',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  },
  resolve: async (_, { title, body }, { user, auth }) => {
    const authorId = auth.user._id
    return await postRepository.create({ title, body, authorId })
  }
})