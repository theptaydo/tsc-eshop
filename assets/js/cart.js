function addToCart(button) {
  // Lấy thẻ cha chứa thông tin sản phẩm
  const productElement = button.closest(".product_list_item");

  // Lấy thông tin sản phẩm
  const imageElement = productElement.querySelector(".product_thumb img");
  const imageSrc = imageElement.src;
  const productName =
    productElement.querySelector(".product_title a").textContent;
  const productPrice =
    productElement.querySelector(".product_price").textContent;
  const productId = productElement.querySelector(".product_id").textContent;


  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ Local Storage hoặc tạo giỏ hàng mới
  if (cart === null || cart.length === 0) {
    cart = [];
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].quantity = cart[i].quantity + 1;

        localStorage.setItem("cart", JSON.stringify(cart));

        return;
      }
    }
  }

  // Tạo đối tượng sản phẩm
  const product = {
    id: productId,
    name: productName,
    image: imageSrc,
    price: productPrice,
    quantity: 1,
  };

   
  // // Thêm sản phẩm vào giỏ hàng
  cart.push(product);

  // Lưu giỏ hàng vào Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật giỏ hàng trên giao diện
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = ""; // Xóa giỏ hàng hiện tại để cập nhật lại
  let totalPrice = 0;

  // Cập nhật số lượng sản phẩm và tổng giá
  cartCount.textContent = cart.length;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  // Xóa sản phẩm khỏi giỏ hàng theo chỉ số index
  cart.splice(index, 1);

  // Cập nhật lại Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Hiển thị giỏ hàng khi tải lại trang
document.addEventListener("DOMContentLoaded", renderCart);

 


// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  let cart = localStorage.getItem("cart");
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Gọi hàm displayCart khi trang tải xong
displayCart();
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
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Khi trang được tải, hiển thị giỏ hàng từ Local Storage
document.addEventListener("DOMContentLoaded", renderCart);

 

  function addToProductList(button) {
  // Lấy thẻ cha chứa thông tin sản phẩm
  const productElement = button.closest(".single_product");

  // Lấy thông tin sản phẩm
  const imageElement = productElement.querySelector(".product_thumb img");
  const imageSrc = imageElement.src;
  const productName =
    productElement.querySelector(".product_title a").textContent;
  const productPrice =
    productElement.querySelector(".product_price").textContent;
  const productId = productElement.querySelector(".product_id").textContent;


  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ Local Storage hoặc tạo giỏ hàng mới
  if (cart === null || cart.length === 0) {
    cart = [];
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].quantity = cart[i].quantity + 1;

        localStorage.setItem("cart", JSON.stringify(cart));

        return;
      }
    }
  }

  // Tạo đối tượng sản phẩm
  const product = {
    id: productId,
    name: productName,
    image: imageSrc,
    price: productPrice,
    quantity: 1,
  };

   
  // // Thêm sản phẩm vào giỏ hàng
  cart.push(product);

  // Lưu giỏ hàng vào Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật giỏ hàng trên giao diện
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = ""; // Xóa giỏ hàng hiện tại để cập nhật lại
  let totalPrice = 0;

  // Cập nhật số lượng sản phẩm và tổng giá
  cartCount.textContent = cart.length;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  // Xóa sản phẩm khỏi giỏ hàng theo chỉ số index
  cart.splice(index, 1);

  // Cập nhật lại Local Storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Hiển thị giỏ hàng khi tải lại trang
document.addEventListener("DOMContentLoaded", renderCart);

 


// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  let cart = localStorage.getItem("cart");
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// Gọi hàm displayCart khi trang tải xong
displayCart();
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
  localStorage.setItem("cart", JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Khi trang được tải, hiển thị giỏ hàng từ Local Storage
document.addEventListener("DOMContentLoaded", renderCart);

 
