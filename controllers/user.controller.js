const db = require('../dataBase/users')

module.exports = {
  getUsers: (req, res) => {
    res.json(db)
  }, getUserById: (req, res) => {
    const { user_id } = req.params
    res.json(user_id)
  },
  postUsers: (req, res) => {
    res.json('Get Users')
  },
  deleteUsers: (req, res) => {
    res.json('Delete Users')
  }
}







