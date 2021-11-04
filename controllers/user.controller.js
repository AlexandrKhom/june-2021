const User = require('../dataBase/User')

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      res.json(e)
    }
  },
  getUser: async (req, res) => {
    try {
      const { user_id } = req.params
      const user = await User.findById(user_id)
      res.json(user)
    } catch (e) {
      res.json(e)
    }
  },
  postUser: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.json(user)
    } catch (e) {
      res.json(e)
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { user_id } = req.params
      const user = await User.findOneAndDelete(user_id)
      res.json(user)
    } catch (e) {
      res.json(e)
    }
  }
}


