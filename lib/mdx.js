import { bundleMDX } from 'mdx-bundler'
import rehypePrism from 'rehype-prism-plus'
import prisma from "../lib/prisma";

export const getPost = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts
}

export const getPostBySlug = async slug => {

  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  const result = await bundleMDX({
    source: post.body || '## Not found',
    mdxOptions(options, frontmatter) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]
      return options
    }
  })
  return {
    ...post,
    code: result.code
  }
}