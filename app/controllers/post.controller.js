const Post = require("../models/post.model");

exports.getPosts = async (req, res) => {
  try {
    // Lấy tất cả dữ liệu từ request body
    const posts = await Post.find();

    return res.json(posts);

  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    // Lấy tất cả dữ liệu từ request body
    const id = req.query.id;
    const post = await Post.findById(id);

    return res.json(post);

  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.savePost = async (req, res) => {
  try {
    // Lấy tất cả dữ liệu từ request body
    const { index, title, description, content, banner, category, status, SEO } = req.body;

    const postData = {
      index: index,
      title: title,
      description: description,
      content: content,
      banner: banner,
      createByUser: req.username,
      category: category,
      status: status,
      SEO: SEO
    }

    // Tạo một sản phẩm mới từ dữ liệu client
    const newPost = new Post(postData);

    // Lưu sản phẩm vào MongoDB
    await newPost.save();

    return res.json(newPost);

  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};