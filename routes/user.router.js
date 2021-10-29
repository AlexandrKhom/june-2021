const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.post(`/`, userController.postUsers)
router.get(`/`, userController.getUsers)
router.get(`/:user_id`, userController.getUserById)
router.delete(`/`, userController.deleteUsers)

module.exports = router


