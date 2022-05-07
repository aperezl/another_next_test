import { GraphQLString } from "graphql";
import { validator } from '../../../util/validator'

export const makeRegister = ({ userRepository, createJWT }) => ({
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString},
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    const requiredFields = ['username', 'email', 'password', 'displayName']
    if (!validator(requiredFields, args)) {
      throw new Error('Bad Request')
    }
    const user = await userRepository.create(args)
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
    return token
  }
})