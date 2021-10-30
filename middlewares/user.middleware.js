//импортируем модель схемы из базы
const User = require('../dataBase/User')
//добавляется next, который пропускает запрос
//если мидлвара не получила ошибок

const userValidator = require('../validators/user.validator')

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
      next()
    } catch (e) {
      //выводим текст ошибки
      res.json(e.message)
    }
  },
  isUserValid: async (req, res, next) => {
    try {
      const {error, value} = await userValidator.createUserValidator.validate(req.body)
      if (error) {
        throw new Error(error.details[0].message)
      }
      console.log('*******')
      console.log(value)
      console.log('*******')
      req.body = value
      next()
    } catch (e) {
      console.log(e)
    }
  }


}



