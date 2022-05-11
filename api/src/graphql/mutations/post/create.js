export const makeCreatePostMutation = ({ createPostController }) =>
async (_, { title, body }, { auth }) => {
  const authorId = auth.user._id
  return await createPostController({ title, authorId, body })
}
