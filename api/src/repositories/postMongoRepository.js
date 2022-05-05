import Post from '../models/Post'

export default async function postMongoRepository({ db } = {}) {
  return {
    create: async post => {
      const savedPost = new Post(post)
      const saved = await savedPost.save()
      return saved
    }
  }
}