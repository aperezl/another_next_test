import { makeLoginController } from '../../controllers/auth/loginController'

const makeCreateJWT = () => payload => 'validToken'
const makeUserRepository = () => {
  const mails = [{ email: 'valid@email.com', password: 'validPassword' }]
  return {
    created: async user => user,
    findByEmail: async email => mails.find(mail => mail.email === email),
  }
}

const makeSut = () => {
  const userRepository = makeUserRepository()
  const createJWT = makeCreateJWT()
  const sut = makeLoginController({ userRepository, createJWT})

  return {
    sut,
    userRepository,
    createJWT
  }
}

describe('login', () => {
  test('should return a valid token when email and password is valid', async () => {
    const { sut } = makeSut()
    const result = await sut({ email: 'valid@email.com', password: 'validPassword' })
    expect(result).toBe('validToken')
  })

  test('should return a throw when email is invalid', async () => {
    const { sut } = makeSut()
    const promise = sut({ email: 'invalid@email.com', password: 'validPassword' })
    await expect(promise).rejects.toThrow('Invalid email or password')
  })

  test('should return a throw when password is invalid', async () => {
    const { sut } = makeSut()
    const promise = sut({ email: 'valid@email.com', password: 'invalidPassword' })
    await expect(promise).rejects.toThrow('Invalid email or password')
  })
})