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
const userMiddleware = require('../middlewares/user.middleware')

router.post('/',userMiddleware.createUserMiddleware, userController.createUser)
router.get('/', userController.getUsers)
router.get('/:user_id', userController.getUsersById)

module.exports = router
