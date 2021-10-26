const User = require('../dataBase/User')

module.exports = {
  createUserMiddleware: async (req, res, next) => {
    try {
      console.log('MIDDLEWARE WORK')
      const userByEmail = await User.findOne({email: req.body.email})
      if (userByEmail) {
        throw new Error('email is exist')
      }
      next()
    } catch (e) {
      console.log(e.message)
    }
  }
}






