import { GraphQLString } from "graphql";

export const register = {
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString},
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args, ctx) => {
    const user = await ctx.userRepository.create(args)
    return user
  }
}