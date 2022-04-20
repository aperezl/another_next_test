import prisma from '../lib/prisma'

export default function postRepository () {
  return {
    getPublishedPosts: async () => {
      return await prisma.post.findMany({
        where: { published: true },
        include: {
          author: {
            select: { name: true }
          }
        }
      })
    },
    getDraftsPosts: async () => {
      return await prisma.post.findMany({
        where: { published: false },
        include: {
          author: {
            select: { name: true }
          }
        }
      })
    },
    getPostBySlug: async slug => {
      return await prisma.post.findUnique({
        where: { slug },
        include: {
          author: {
            select: { name: true }
          }
        }
      })
    },
    createPost: async ({ title, slug, body, published, authorId }) => {
      return await prisma.post.create({
        data: {
          title,
          slug,
          body,
          published
        }
      })
    }
  }
}
