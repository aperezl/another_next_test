export const makeRegisterController = ({ userRepository, createJWT, validator }) =>
  async ({ username, email, password, displayName }) =>
  {
    const requiredFields = ['username', 'email', 'password', 'displayName']
    if (!validator(requiredFields, {
      username,
      email,
      password,
      displayName
    })) {
      throw new Error('Bad Request')
    }
    const user = await userRepository.create({
      username,
      email,
      password,
      displayName
    })
    const token = createJWT({
      _id: user._id,
      username: user.username,
      email: user.email,
    })
    return token
  }