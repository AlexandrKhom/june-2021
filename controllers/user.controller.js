const User = require('../dataBase/User')


module.exports = {
  getUser: async (req, res) => {
   try {
     const users = await User.find()
     res.json(users)
   }
   catch (e) {
     console.log(e)
   }
  },

  getUserById: async (req, res) => {
    try {
      const {user_id} = req.params
      console.log(user_id)
      const user = await User.findById(user_id)
      res.json({user})
    }
    catch (e) {
      console.log(e)
    }
  },

  createUser: async (req, res) => {
try {
  console.log(req.body)
  const user = await User.create(req.body)
  res.json(user)
}
catch (e) {
  console.log(e)
}
  },

  updateUser: (req, res) => {
    res.json('Update User')
  }
}



