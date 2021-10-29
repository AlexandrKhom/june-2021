//импортируем модель схемы из базы
const User = require('../dataBase/User')
//добавляется next, который пропускает запрос
//если мидлвара не получила ошибок
module.exports = {
  createUserMiddleware: async (req, res, next) => {
    try {
      //создаём нового юзера, но если в базе
      //уже есть такая почта, то выводим ошибку
      const userByEmail = await User.findOne({email: req.body.email})
      if (userByEmail) {
        //пишем текст ошибки
        throw new Error('EMAIL EXIST')
      }
      console.log('hello')
      next()
    } catch (e) {
      //выводим текст ошибки
      res.json(e.message)
    }
  }
}
