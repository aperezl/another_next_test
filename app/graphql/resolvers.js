export const resolvers = {
  Query: {
    getUser: async (_, __, ctx) => {
      await ctx.revalidate('/')
      return {
        id: 'Foo',
        name: 'John Doe'
      }
    },
    getPosts: async (_, __, ctx) => {
      return ctx.postRepository.getPublishedPosts()
    }
  },
  Mutation: {
    revalidate: async (_, { slug }, ctx) => {
      await ctx.revalidate('/')
      await ctx.revalidate(`/blog/${slug}`)
      return true
    },
    createPost: async (_, { params }, ctx) => {
      const newPost = await ctx.postRepository.createPost(params)
      return newPost
    }
  }
}
