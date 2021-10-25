const db = require('../dataBase/users')


module.exports = {
  getUser: (req, res) => {
    res.json(db)
  },

  getUserById: (req, res) => {
    const {user_id} = req.params
    const user = db[user_id - 1]
    res.json({user})
  },

  createUser: (req, res) => {
    res.json('Create New User')
  },

  updateYser: (req, res) => {
    res.json('Update User')
  }
}




