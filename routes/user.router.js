const router = require('express').Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getUser)

router.post('/', userController.createUser)

router.put('/', userController.updateYser)

module.exports = router


