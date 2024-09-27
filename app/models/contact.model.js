const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  type: {
    type: Array,
    enum: ['CONTRIBUTE', 'MESSAGE', 'COOPERATE'],
    default: 'MESSAGE'
  },
});


const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;