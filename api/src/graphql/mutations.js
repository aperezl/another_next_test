import { GraphQLString } from "graphql";
import { createJWT } from "../util/auth";
import { Post } from "./types";

export const register = {
  type: GraphQLString,
  description: 'Register a new user',
  args: {
    username: { type: GraphQLString},
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString }
  },
  resolve: async (_, args, ctx) => {
    const user = await ctx.userRepository.create(args)
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
    return token
  }
}

export const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: async (_, { email, password }, ctx) => {
    const user = await ctx.userRepository.findByEmail(email)
    if (!user || password !== user.password) throw new Error('Invalid email or password')
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email
    })
    return token
  }
}

export const createPost = {
  type: Post,
  description: 'Create a new post',
  args: {
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  },
  resolve: async (_, { title, body }, { user, auth, postRepository}) => {
    const authorId = auth.user._id
    return await postRepository.create({ title, body, authorId })
  }
}