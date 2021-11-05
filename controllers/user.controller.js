const User = require('../dataBase/User')

const passwordService = require('../service/password.service')
const userUtil = require('../util/user.util')


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
      const {user_id} = req.params
      let user = await User.findById(user_id).lean()
      user = userUtil.userNorm(user)
      res.json(user)
    } catch (e) {
      res.json(e)
    }
  },
  postUser: async (req, res) => {
    try {
      const hashedPassword = await passwordService.hash(req.body.password)
      const newUser = await User.create({...req.body, password: hashedPassword})
      res.json(newUser)
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


