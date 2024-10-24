const User = require("../models/user.model");
const config = require('../config/security.config');
var jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// Hàm kiểm tra mật khẩu khi người dùng đăng nhập
async function comparePassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

exports.signin = async (req, res) => {
  try {
    // Lấy dữ liệu từ client gửi lên
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({
        message: "You are not allowed to access the system. Please contact administrator",
      });

    const comparePass = await comparePassword(password, user.password);
    if (comparePass) {
      res.status(201).json({
        message: "Login was successful",
        user: {
          fullName: user?.fullname,
          email: user?.email,
          picture: user?.photo,
          role: user?.role,
          token: jwt.sign({ username: user?.username, roles: user?.role }, config.SECRET, {
            expiresIn: "1d",
          }),
          refreshToken: jwt.sign({ username: user?.username, roles: user?.role }, config.SECRET, {
            expiresIn: "7d",
          }),
        },
      });
    } else {
      res.status(201).json({
        message: "Login was failed, infor not matches",
      });
    }


  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};