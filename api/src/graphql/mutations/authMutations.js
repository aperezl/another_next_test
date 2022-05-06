import { GraphQLString } from "graphql";
import { createJWT } from "../../util/auth";

export const makeRegister = ({ userRepository }) => ({
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString},
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    console.log({ userRepository })
    const user = await userRepository.create(args)
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
    return token
  }
})

export const makeLogin = ({ userRepository }) => ({
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (_, { email, password }) => {
    const user = await userRepository.findByEmail(email)
    if (!user || password !== user.password) throw new Error('Invalid email or password')
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email
    })
    return token
  }
})