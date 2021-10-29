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







