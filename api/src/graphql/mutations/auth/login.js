import { GraphQLString } from "graphql";

export const makeLoginMutation = ({ loginController }) =>
async (_, { email, password }) => await loginController({ email, password })