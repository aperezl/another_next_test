import { GraphQLList, GraphQLString } from "graphql";
import { User } from "./types";

export const users = {
  type: new GraphQLList(User),
  description: 'List of users',
  resolve: async (_, __, ctx) => await ctx.userRepository.findAll()
}

export const user = {
  type: User,
  description: 'Find a user by id',
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }, ctx) => await ctx.userRepository.findById(id)
}
