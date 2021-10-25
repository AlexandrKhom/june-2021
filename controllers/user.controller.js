// const db = require('../dataBase/users')
//
//
// module.exports = {
//   getUser: (req, res) => {
//     res.json(db)
//   },
//
//   getUserById: (req, res) => {
//     const {user_id} = req.params
//     const user = db[user_id - 1]
//     res.json({user})
//   },
//
//   createUser: (req, res) => {
//     console.log(req.body)
//     db.push({...req.body, id: db.length + 1})
//     res.json('Create New User')
//   },
//
//   updateUser: (req, res) => {
//     res.json('Update User')
//   }
// }
const db = require('../dataBase/users')


module.exports = {
  getUsers: (req, res)=> {
    res.json(db)
  },
getOneUser: (req, res)=> {
    const {user_id} = req.params
  const user = db[user_id - 1]
  console.log(user)
  console.log('******')
  console.log({user})
  res.json(user)
},

  createUsers: (req, res) => {
    db.push({...req.body, id: db.length + 1})
    console.log(req.body)
    res.json('Create User')
  },
  updateUsers: (req, res) => {
    res.json('Update User')
  },
}


