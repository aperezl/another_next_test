export const makeGetUserController = ({ userRepository }) => async id => {
  return await userRepository.findById(id)
}