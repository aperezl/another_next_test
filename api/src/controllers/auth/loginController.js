export const makeLoginController = ({ userRepository, createJWT }) => async ({ email, password }) => {
  const user = await userRepository.findByEmail(email)
  if (!user || password !== user.password) throw new Error('Invalid email or password')
  const token = createJWT({
    _id: user._id,
    username: user.username,
    email: user.email
  })
  return token
}