const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Đảm bảo sử dụng một giá trị mặc định
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  },
  role: {
    type: Array,
    enum: ['ADMIN', 'MODERATOR', 'OWNER'],
    default: 'MODERATOR'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


const User = mongoose.model('user', userSchema);

module.exports = User;