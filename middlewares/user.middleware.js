const User = require('../dataBase/User')
const userValidator = require('../validators/user.validator')

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const newEmail = await User.findOne({ email: req.body.email })
      if (newEmail) {
        throw new Error('email exist')
      }
      next()
    } catch (e) {
      res.json(e.message)
    }
  },
  isUserValid: async (req, res, next) => {
    try {
      const {error, value} = await userValidator.userValidator.validate(req.body)
      if (error) {
        throw new Error(error.details[0].message)
      }
      req.body = value
      next()
    } catch (e) {
      console.log(e)
    }
  }
}
