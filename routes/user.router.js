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


// const router = require('express').Router()
// const userController = require('../controllers/user.controller')
// const userMiddleware = require('../middlewares/user.middleware')
// //все мидлвары добавляем ДО контроллера
// router.post('/', userMiddleware.isUserValid, userMiddleware.createUserMiddleware, userController.createUser)
// router.get('/', userController.getUsers)
// router.get('/:user_id', userController.getUsersById)
// router.delete('/:user_id', userController.deleteUser)
//
// module.exports = router


const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getUsers);
router.get('/:user_id', userController.getUsersById);
router.post('/', userController.postUsers);
router.delete('/:user_id', userController.deleteUsersById)

module.exports = router
