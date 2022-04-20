import { ApolloServer, gql } from 'apollo-server-micro'
import { resolvers } from '../../graphql/resolvers'
import { typeDefs } from '../../graphql/typeDefs'
import makeContext from '../../graphql/makeContext'

const makePostRepository = () => {
  const posts = []
  return {
    getPublishedPosts: async () => {},
    getDraftsPosts: async () => {},
    getPostBySlug: async slug => {},
    createPost: async (params) => {
      const post = {
        id: (posts.length + 1).toString(),
        ...params
      }
      posts.push(post)
      return post
    }
  }
}

const createTestServer = () => {
  const context = makeContext({ postRepository: makePostRepository() })

  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
    context
  })
  return testServer
}

const createPostMutation = gql`
  mutation Mutation($params: newPostParams) {
    createPost(params: $params) {
      id
      title
      slug
      body
      published
    }
  }
`

describe('createPost', () => {
  it('should create a new post', async () => {
    const testServer = createTestServer()
    const result = await testServer.executeOperation({
      query: createPostMutation,
      variables: {
        params: {
          title: 'Test Post',
          slug: 'test-post-1',
          body: 'This is a test post',
          published: false
        }
      }
    }, {
      res: {
        unstable_revalidate: () => null
      }
    })
    expect(result.errors).toBeUndefined()
    expect(result.data.createPost.title).toEqual('Test Post')
    expect(result.data.createPost.slug).toEqual('test-post-1')
    expect(result.data.createPost.body).toEqual('This is a test post')
    expect(result.data.createPost.published).toEqual(false)
  })
})
