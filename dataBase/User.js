const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'manager']
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = model('user', userSchema)



