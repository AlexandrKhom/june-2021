const router = require('express').Router();

router.get('/', (req, res)=> {
  res.json('hello world get user')
})

router.post('/', (req, res)=> {
  res.json('hello world post user')
})

router.put('/', (req, res)=> {
  res.json('hello world update user')
})

module.exports = router


