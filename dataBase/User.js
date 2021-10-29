const {Schema, model } = require('mongoose');

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
    default: 'user',
    enum: ['user', 'admin', 'manager']
  }
}, {timestamps: true})

module.exports = model('user', userSchema)
