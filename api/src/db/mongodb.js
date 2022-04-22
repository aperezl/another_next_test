import mongoose from 'mongoose'

export const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/test')
  console.log('Database Connected')
  return db
}

