const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const securityConfig = require('../config/security.config');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Đảm bảo sử dụng một giá trị mặc định
  },
  email: {
    type: String,
    required: true
  },
  photo: {
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
  address: {
    type: String,
    default: true
  },
  role: {
    type: [String], // Đảm bảo đây là một mảng chuỗi
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

// Mã hóa mật khẩu trước khi lưu
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRounds = securityConfig.SALT;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});


const User = mongoose.model('user', userSchema);

module.exports = User;