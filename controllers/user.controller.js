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
    console.log(req.body)
    db.push({...req.body, id: db.length + 1})
    res.json('Create New User')
  },

  updateUser: (req, res) => {
    res.json('Update User')
  }
}




