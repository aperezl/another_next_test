import jwt from 'jsonwebtoken'

export const createJWT = user =>  jwt.sign({ user }, 'secret', { expiresIn: '1h' })
