import User from '../models/User'

export default async function mongoRepository({ db } = {}) {
  return {
    create: async user => {
      const savedUser = new User(user)
      const saved =  await savedUser.save()
      console.log({ saved })
      return saved
    }
  }
}