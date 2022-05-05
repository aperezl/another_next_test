import jwt, { verify } from 'jsonwebtoken'

export default (req) => {

  try {	
    const token = req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : null
    if (token) {
      const verified = jwt.verify(token, 'secret')
      return {
        isAuth: true,
        user: verified.user
      }
    }
    return {
      isAuth: false,
    }
    
  } catch (err) {
    return {
      isAuth: false
    }
  }
}