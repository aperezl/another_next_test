import { GraphQLString } from "graphql";

export const hello = {
  type: GraphQLString,
  description: 'return string',
  resolve: () => 'Hello world'
}