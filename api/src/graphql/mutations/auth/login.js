import { GraphQLString } from "graphql";

export const makeLogin = ({ loginController }) => ({
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (_, { email, password }) => await loginController({ email, password })
})