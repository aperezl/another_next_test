import { makeRegisterController } from '../../controllers/auth/register'
import { validator } from '../../util/validator'

const makeCreateJWT = () => payload => 'validToken'
const makeValidator = () => validator
const makeUserRepository = () => {
  const mails = [{ email: 'valid@email.com', password: 'validPassword' }]
  return {
    create: async user => mails.push(user),
    findByEmail: async email => mails.find(mail => mail.email === email),
  }
}
const makeFakeUser = () => ({
  username: 'validUsername',
  email: 'valid@email.com',
  password: 'validPassword',
  displayName: 'validDisplayName'
})

const makeSut = () => {
  const userRepository = makeUserRepository()
  const createJWT = makeCreateJWT()
  const validator = makeValidator()
  const sut = makeRegisterController({ userRepository, createJWT, validator})

  return {
    sut,
    userRepository,
    createJWT
  }
}

describe('register', () => {
  test('shold return a valid token when user payload are valid', async () => {
    const { sut } = makeSut()
    const fakeUser = makeFakeUser()
    const result = await sut(fakeUser)
    expect(result).toBe('validToken')
  })

  test('should return throw username is not provided', async () => {
    const { sut } = makeSut()
    const fakeUser = makeFakeUser()
    delete fakeUser.username
    const promise = sut(fakeUser)
    await expect(promise).rejects.toThrow('Bad Request')
  })

  test('should return throw email is not provided', async () => {
    const { sut } = makeSut()
    const fakeUser = makeFakeUser()
    delete fakeUser.email
    const promise = sut(fakeUser)
    await expect(promise).rejects.toThrow('Bad Request')
  })

  test('should return throw password is not provided', async () => {
    const { sut } = makeSut()
    const fakeUser = makeFakeUser()
    delete fakeUser.password
    const promise = sut(fakeUser)
    await expect(promise).rejects.toThrow('Bad Request')
  })

  test('should return throw displayName is not provided', async () => {
    const { sut } = makeSut()
    const fakeUser = makeFakeUser()
    delete fakeUser.displayName
    const promise = sut(fakeUser)
    await expect(promise).rejects.toThrow('Bad Request')
  })

})