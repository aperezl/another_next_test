export default function makeContext ({ postRepository }) {
  return function ({ req, res }) {
    return {
      revalidate: res.unstable_revalidate,
      postRepository
    }
  }
}
