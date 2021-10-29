const router = require('express').Router()

router.post(`/`, (req, res)=> {
  res.json('Post Users')
})
router.get(`/`, (req, res)=> {
  res.json('Get Users')
})
router.delete(`/`, (req, res)=> {
  res.json('Delete Users')
})

module.exports = router


