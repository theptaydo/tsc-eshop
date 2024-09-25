let cart = JSON.parse(localStorage.getItem("mini_cart")) || [];

function addToCart(button) {
  // Lấy phần tử cha có class 'single_product' chứa thông tin sản phẩm
  const productElement = button.closest(".product_details");

  // Lấy hình ảnh sản phẩm và thông tin sản phẩm
  const imageElement = productElement.querySelector(".modal_img img");
  const imageSrc = imageElement.src;
  const productName = imageElement.alt || "Product Name"; // Tên sản phẩm
  const productPrice = productElement.querySelector(".new_price").innerText; // Giá sản phẩm

  // Tạo đối tượng sản phẩm mới để thêm vào giỏ hàng
  const product = {
    name: productName,
    image: imageSrc,
    price: productPrice,
  };

  // Thêm sản phẩm vào danh sách giỏ hàng
  cart.push(product);

  // Lưu lại giỏ hàng vào Local Storage
  localStorage.setItem("mini_cart", JSON.stringify(cart));

  // Cập nhật giỏ hàng hiển thị trên giao diện
  renderCart();
}

function addToCartPage(button) {
    // Lấy phần tử cha có class 'single_product' chứa thông tin sản phẩm
    const productElement = button.closest(".single_product");
  
    // Lấy hình ảnh sản phẩm và thông tin sản phẩm
    const imageElement = productElement.querySelector(".product_thumb img");
    const imageSrc = imageElement.src;
    const productName = imageElement.alt || "Product Name"; // Tên sản phẩm
    const productPrice = productElement.querySelector(".product_price").innerText; // Giá sản phẩm
  
    // Tạo đối tượng sản phẩm mới để thêm vào giỏ hàng
    const product = {
      name: productName,
      image: imageSrc,
      price: productPrice,
    };
  
    // Thêm sản phẩm vào danh sách giỏ hàng
    cart.push(product);
  
    // Lưu lại giỏ hàng vào Local Storage
    localStorage.setItem("mini_cart", JSON.stringify(cart));
  
    // Cập nhật giỏ hàng hiển thị trên giao diện
    renderCart();
}  

function renderCart() {
    const cartItemsContainer = document.querySelector(".mini_cart"); // Lấy phần tử cha
  
    cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ
  
    cart.forEach((product, index) => {
      const cartItemHTML = `
        <div class="cart_item">
          <div class="cart_img">
            <a href="#"><img src="${product.image}" alt="${product.name}"></a>
          </div>
          <div class="cart_info">
            <a href="#">${product.name}</a>
            <span class="cart_price">${product.price}đ</span>
            <span class="quantity">Qty: 1</span>
          </div>
          <div class="cart_remove">
            <a title="Remove this item" href="#" onclick="removeFromCart(${index})">
              <i class="fa fa-times-circle"></i>
            </a>
          </div>
        </div>
      `;
      
      cartItemsContainer.innerHTML += cartItemHTML;
    });
  }
  

function removeFromCart(index) {
    // Xóa sản phẩm khỏi giỏ hàng theo chỉ số
    cart.splice(index, 1);

    // Cập nhật lại giỏ hàng trong Local Storage
    localStorage.setItem("mini_cart", JSON.stringify(cart));

    // Cập nhật lại giỏ hàng hiển thị
    renderCart();
  }

  // Khi trang được tải, hiển thị giỏ hàng từ Local Storage
  document.addEventListener("DOMContentLoaded", renderCart);