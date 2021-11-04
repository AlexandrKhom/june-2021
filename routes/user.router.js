// const {Router} = require('express')
// const router = Router()
const router = require('express').Router()
const middleware = require('../middlewares/user.middleware')
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers)
router.get('/:user_id', userController.getUser)
router.post('/', middleware.createUser, userController.postUser)
router.delete('/:user_id', userController.deleteUser)

module.exports = router
