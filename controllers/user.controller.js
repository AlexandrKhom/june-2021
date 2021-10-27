const db = require('../dataBase/users')

module.exports = {
  getUsers: (req, res) => {
    res.json(db)
    console.log('router GET ALL users')
  },
  getUserById: (req, res) => {
    const {user_id} = req.params
    const user = db[user_id - 1]
    res.json(user)
    console.log('router GET users Id')
  },
  createUsers: (req, res) => {
    console.log(req.body)
    db.push({...req.body, id: db.length + 1})
    res.json(db)
    console.log('router POST user')
  },
  deleteUsers: (req, res) => {
    res.json('delete user')
    console.log('router DELETE user')
  },

}







