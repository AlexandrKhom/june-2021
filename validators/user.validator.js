//установить Joi для валидации данных
const Joi = require('joi')
const userRoles = require('../configs/user-roles')

//описываем данные для валидации
const createUserValidator = Joi.object({
  name: Joi.string().alphanum().trim().required(),
  email: Joi.string().trim().required(),
  role: Joi.string().valid(...Object.values(userRoles)),
  password: Joi.string().trim()
})

module.exports = {
  createUserValidator
}

