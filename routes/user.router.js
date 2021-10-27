// const {getUsers, createUsers, deleteUsers} = require("../controllers/user.controller");
const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers);

router.get('/:user_id', userController.getUserById);

router.post('/', userController.createUsers)

router.delete('/', userController.deleteUsers)



module.exports = router






