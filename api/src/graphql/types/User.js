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