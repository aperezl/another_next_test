export const makeGetUsersController = ({ userRepository }) => async () => {
  return await userRepository.findAll()
}