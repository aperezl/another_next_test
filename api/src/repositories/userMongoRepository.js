import User from '../models/User'

export default function userMongoRepository () {
  return {
    create: async user => {
      const savedUser = new User(user)
      const saved =  await savedUser.save()
      return saved
    },
    findByEmail: async email => await User.findOne({ email }),
    findById: async id => await User.findById(id),
    findAll: async () => await User.find()
  }
}