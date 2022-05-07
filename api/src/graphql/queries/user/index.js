import { GraphQLList, GraphQLString } from 'graphql'
import { User } from '../../types'

export const makeUsers = ({ getUsersController }) => ({
  type: new GraphQLList(User),
  description: 'List of users',
  resolve: getUsersController
})

export const makeUser = ({ getUserController }) => ({
  type: User,
  description: 'Find a user by id',
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (_, { id }) => await getUserController(id)
})
