// создаём схему и модель
const {Schema, model } = require('mongoose');
//enum значения лучше хранить отдельно
const userRoles = require('../configs/user-roles')

//наследуемся от СХЕМЫ и описываем её
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    default: userRoles.USER,
    // //вариант описания enum прямо в СХЕМЕ
    // enum: ['user', 'admin', 'manager']
    //вариант описания enum импортируя
    enum: Object.values(userRoles)
  }
  // добавляем временные штампы для фиксации создания и обновления
}, {timestamps: true})
//экспортируем модель (название в коллекции, наша схема)
module.exports = model('user', userSchema)





