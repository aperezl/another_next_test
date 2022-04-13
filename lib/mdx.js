import { posts } from '../data/posts'
import { bundleMDX } from 'mdx-bundler'
import rehypePrism from 'rehype-prism-plus'

export const getPost = async () => posts

export const getPostBySlug = async slug => {
  const post = posts.find(post => post.slug === slug)
  const result = await bundleMDX({
    source: post.body,
    mdxOptions(options, frontmatter) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism]
      return options
    }

  })
  console.log(result)
  return {
    ...post,
    code: result.code
  }
}