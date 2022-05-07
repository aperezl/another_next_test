import { GraphQLString } from "graphql";
import { validator } from '../../../util/validator'

export const makeRegister = ({ registerController }) => ({
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString},
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => await registerController(args)
})