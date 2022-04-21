import { getPost, getPostBySlug } from "../../lib/mdx"
import { getMDXComponent } from 'mdx-bundler/client'
import "prismjs/themes/prism-tomorrow.css"

export default function Post({ post }) {
  
  const PostContent = getMDXComponent(post.code)
  return (
    <>
      <h1>{post.title}</h1>
      <PostContent />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const post = await getPostBySlug(slug)
  return {
    props: {
      post
    },
    revalidate: false
  }
}

export const getStaticPaths = async () => {
  const posts = await getPost()
  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}