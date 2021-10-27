const router = require('express').Router()

router.get('/', (req, res)=> {
  res.json('All users')
  console.log('router GET ALL users')
})

router.post('/', (req, res)=> {
  res.json('create user')
  console.log('router POST user')
})

router.delete('/', (req, res)=> {
  res.json('delete user')
  console.log('router DELETE user')
})



module.exports = router






