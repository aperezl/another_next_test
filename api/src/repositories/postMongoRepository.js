import Post from '../models/Post'

export default function postMongoRepository () {
  return {
    create: async post => {
      const savedPost = new Post(post)
      const saved = await savedPost.save()
      return saved
    }
  }
}