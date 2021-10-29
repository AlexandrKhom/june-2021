// //создаём роутер (из экспресса)
// const router = require('express').Router()
// //создаём контроллер из файла с контроллером
// const userController = require('../controllers/user.controller')
//
// //роутер для создания
// router.post(`/`, userController.postUsers)
// //роутер для получения всех
// router.get(`/`, userController.getUsers)
// //роутер для получения одного
// router.get(`/:user_id`, userController.getUserById)
//
// //экспортируем
// module.exports = router

const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.post('/', userController.createUser)
router.get('/', userController.getUsers)
router.get('/:user_id', userController.getUsersById)

module.exports = router
