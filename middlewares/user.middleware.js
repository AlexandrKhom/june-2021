const User = require('../dataBase/User')


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
  }
}
