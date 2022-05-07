import { GraphQLString } from "graphql";
import { Post } from '../../types'

export const makeCreatePost = ({ createPostController }) => ({
  type: Post,
  description: 'Create a new post',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  },
  resolve: async (_, { title, body }, { auth }) => {
    const authorId = auth.user._id
    return await createPostController({ title, authorId, body })
  }
})