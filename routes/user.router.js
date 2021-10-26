const router = require('express').Router();
const userController = require('../controllers/user.controller')
const userMIddleware = require('../middlewares/user.middleware')

router.get('/', userMIddleware.createUserMiddleware, userController.getUser);

router.get('/:user_id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

module.exports = router;

