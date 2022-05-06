import { makeLogin } from "./authMutations"

const makeUserRepository = () => ({
  created: async user => user
})
const makeSut = () => {
  const userRepository = makeUserRepository()
  const sut = makeLogin({ userRepository })

  return {
    sut
  }
}

describe('login', () => {
  test('make login', () => {
    const { sut } = makeSut()
    console.log({ sut })
  })
})