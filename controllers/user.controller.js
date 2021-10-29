const db = require('../dataBase/users')

module.exports = {
  getUsers: (req, res) => {
    res.json(db)
  },
  getUserById: (req, res) => {
    const { user_id } = req.params
    const user = db[user_id - 1]
    res.json(user)
  },
  postUsers: (req, res) => {
    db.push({ ...req.body, id: db.length + 1 })
    res.json(db)
  },
  deleteUsers: (req, res) => {
    res.json('Delete Users')
  }
}







