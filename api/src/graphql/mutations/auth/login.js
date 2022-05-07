import { GraphQLString } from "graphql";

export const makeLogin = ({ userRepository, createJWT }) => ({
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