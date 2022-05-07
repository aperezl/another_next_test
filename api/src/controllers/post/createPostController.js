export const makeCreatePostController = ({ postRepository }) => async ({ authorId, title, body }) => {
  return await postRepository.create({ authorId, title, body })
}