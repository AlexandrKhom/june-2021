// //запрос в локальную базу данных
// const db = require('../dataBase/users')
//
// //модуль для экспорта
// module.exports = {
// //контроллер для получения всех юзеров
//   getUsers: (req, res) => {
//     res.json(db)
//   },
// //для получения 1 юзера
//   getUserById: (req, res) => {
//     //в req.params то, что мы передаём в роутере после "/" (/:user_id)
//     const { user_id } = req.params
//     // поиск юзера в базе по индексу
//     const user = db[user_id - 1]
//     res.json(user)
//   },
// //создаём юзера
//   postUsers: (req, res) => {
//     // в req.body то, что мы написали в постмане
//     db.push({ ...req.body, id: db.length + 1 })
//     res.json(db)
//   },
// }

// const db = require('../dataBase/users')


//
// //импортируем модель схемы из базы
// const User = require('../dataBase/User')
//
// const passwordService = require('../service/password.service')
// const userUtil = require('../util/user.util')
//
// //все запросы должны быть асинхронными и в try/catch
// module.exports = {
//   getUsers: async (req, res)=> {
//     try {
//       //у модели появляются методы MongoDB
//       const users = await User.find()
//       res.json(users)
//     } catch (e) {
//       res.json(e)
//     }
//   },
//
//   //при получении юзера скрываем пароль
//   getUsersById: async (req, res)=> {
//     try {
//       const {user_id} = req.params
//       let user = await User.findById(user_id).lean()
//       user = userUtil.userNormalizator(user)
//       res.json(user)
//     } catch (e) {
//       res.json(e)
//     }
//   },
//
//   //при создании юзера хешируем пароль
//   createUser: async (req, res) => {
//    try {
//      const hashedPassword = await passwordService.hash(req.body.password)
//      const newUser = await User.create({...req.body, password: hashedPassword})
//      res.json(newUser)
//    } catch (e) {
//      res.json(e)
//    }
//   },
//   deleteUser: async (req, res) => {
//     try {
//       const {user_id} = req.params
//       const user = await User.findOneAndDelete(user_id)
//       res.json(user)
//     }catch (e) {
//       console.log(e)
//     }
//   }
// }


const User = require('../dataBase/User')

module.exports = {
  getUsers: async (req, res)=> {
   try {
     const user = await User.find()
     res.json(user)
   }catch (e) {
     console.log(e)
   }
  },
  getUsersById: async (req, res)=> {
   try {
     const {user_id} = req.params
     const user = await User.findById(user_id)
     res.json(user)
   }catch (e) {
     console.log(e)
   }
  },
  postUsers: async (req, res)=> {
    try {
      const  user = await User.create(req.body)
      res.json(user)
    }catch (e) {
      console.log(e)
    }
  },
  deleteUsersById: async (req, res)=> {
    try {
      const {user_id} = req.params
      const user = await User.findByIdAndDelete(user_id)
      res.json(user)
    }catch (e) {
      console.log(e)
    }
  },
}


