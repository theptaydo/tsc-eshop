const Product = require("../models/product.model");


exports.saveRatingByProductById = async (req, res) => {
  try {
    // Lấy dữ liệu từ client gửi lên
    const { fullname, email, description, star } = req.body;
    const productId = req.body.productId || req.query.productId;
    const product = await Product.findById(productId);

    console.log(productId)

    if (product) {
      // kiểm tra số sao
      if (star > 5 || star < 0) {
        return res.status(201).json({
          status: 0,
          action: "Failed",
          message: "Số sao không hợp lệ",
        });
      }

      // Tạo một sản phẩm mới từ dữ liệu client
      const cloneProduct = product;
      cloneProduct.ratings.push({
        fullname: fullname,
        email: email,
        description: description,
        star: star
      });

      console.log(cloneProduct)

      const updatedProduct = await Product.updateOne({ _id: productId }, { $set: cloneProduct });

      return res.json(cloneProduct);
    }
    return res.status(404).json({
      status: 0,
      action: "Failed",
      message: "sản phẩm không tồn tại",
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error?.message || error,
    });
  }
};
