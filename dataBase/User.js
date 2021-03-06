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
  }
}, {timestamps: true})

module.exports = model('user', userSchema)



