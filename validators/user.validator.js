const Joi = require('joi')

const userValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.string().valid(['user', 'admin']),
  password: Joi.string().required()
})
module.exports = {userValidator}
