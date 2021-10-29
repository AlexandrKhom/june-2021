const {Schema, model } = require('mongoose');
const userRoles = require('../configs/user-roles')

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
    // enum: ['user', 'admin', 'manager']
    enum: Object.values(userRoles)
  }
}, {timestamps: true})

module.exports = model('user', userSchema)
