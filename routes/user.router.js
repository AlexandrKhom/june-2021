const router = require('express').Router();
const userController = require('../controllers/user.controller')
const userMIddleware = require('../middlewares/user.middleware')

router.get('/', userController.getUser);

router.get('/:user_id', userController.getUserById);

router.post('/', userMIddleware.createUserMiddleware, userController.createUser);

router.put('/', userController.updateUser);

module.exports = router;

