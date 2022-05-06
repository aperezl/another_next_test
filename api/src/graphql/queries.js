import { GraphQLList, GraphQLString } from "graphql";
import { User } from "./types";

export const makeUsers = ({ userRepository }) => ({
  type: new GraphQLList(User),
  description: 'List of users',
  resolve: async () => await userRepository.findAll()
})

export const makeUser = ({ userRepository }) => ({
  type: User,
  description: 'Find a user by id',
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => await userRepository.findById(id)
})
