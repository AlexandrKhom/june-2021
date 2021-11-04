const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.postUser)

module.exports = router
