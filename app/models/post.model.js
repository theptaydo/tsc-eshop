const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId, // Đảm bảo sử dụng một giá trị mặc định
  },
  index: {
    type: Number,
    required: false,
    default: -1
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  createByUser: {
    type: String,
    required: true,
  },
  lastEditAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  category: {
    type: [String],
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
    default: true
  },
  SEO: {
    type: Object,
    required: false,
    default: {
      title: null,
      keyword: null,
      description: null
    }
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;