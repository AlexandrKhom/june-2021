const router = require('express').Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getUser);

router.get('/:user_id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateYser);

module.exports = router;


