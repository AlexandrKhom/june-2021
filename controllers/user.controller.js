module.exports = {
  getUsers: (req, res)=> {
    res.json('All users')
    console.log('router GET ALL users')
  },
  createUsers: (req, res)=> {
    res.json('create user')
    console.log('router POST user')
  },
  deleteUsers: (req, res)=> {
    res.json('delete user')
    console.log('router DELETE user')
  },

}







