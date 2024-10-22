const User = require("../models/user.model");

exports.getUsers = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const productId = req.query.id;
    const products = await Product.findById(productId);

    return res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.saveUser = async (req, res) => {
  try {
    // Lấy dữ liệu từ client gửi lên
    const userData = req.body;
    const username = req.body.username;
    const user = await User.findOne({ username });
    if (user)
      return res.status(201).json({
        status: 0,
        action: "Failed",
        message: "username Đã tồn tại",
      });

    // Tạo một sản phẩm mới từ dữ liệu client
    const newUser = new User(userData);

    // Lưu sản phẩm vào MongoDB
    await newUser.save();

    return res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    // Lấy dữ liệu từ client gửi lên
    const email = req.body;
    const password = req.body;
    const user = await User.findOne(email);

    console.log(user);

    if (user) {
      if (password)
        user.password = password;
      if (email)
        user.email = email;
      if (username)
        user.username = username;

      return res.status(200).json({
        status: 0,
        action: "Success",
        message: "Đã cập nhật",
        user: user
      });
    }
    return res.status(201).json({
      status: 0,
      action: "Failed",
      message: "user không tồn tại",
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error?.message || error,
    });
  }
};
