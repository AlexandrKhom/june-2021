const db = require('../dataBase/users')

module.exports = {
  getUsers: (req, res) => {
    res.json(db)
  },
  getUser: (req, res) => {
    const {id} = req.params
    const user = db[id - 1]
    res.json(user)
  },
  postUser: (req, res)=> {
    const user = {...req.body, id: db.length + 1}
    db.push(user)
    res.json(user)
  }
}


