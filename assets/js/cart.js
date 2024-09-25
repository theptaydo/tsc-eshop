let cart = JSON.parse(localStorage.getItem('cart')) || []; // Lấy giỏ hàng từ Local Storage hoặc tạo giỏ hàng mới

function addToCart(button) {
  // Lấy thẻ cha chứa thông tin sản phẩm
  const productElement = button.closest('.single_product');
 
  
  // Lấy thông tin sản phẩm
  const imageElement = productElement.querySelector('.product_thumb img');
  const imageSrc = imageElement.src;
  const productName = productElement.querySelector('.product_title a').textContent;
  const productPrice = productElement.querySelector('.product_price').textContent;

  // Tạo đối tượng sản phẩm
  const product = {
    name: productName,
    image: imageSrc,
    price: productPrice
  };

  // Thêm sản phẩm vào giỏ hàng
  cart.push(product);

  // Lưu giỏ hàng vào Local Storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật giỏ hàng trên giao diện
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  
  cartItems.innerHTML = ''; // Xóa giỏ hàng hiện tại để cập nhật lại
  let totalPrice = 0;

  // Duyệt qua danh sách giỏ hàng và hiển thị các sản phẩm
  cart.forEach((product, index) => {
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="50" />
      <span>${product.name}</span>
      <span>${product.price}</span>
      <button onclick="removeFromCart(${index})" >Remove</button>
    `;
    cartItems.appendChild(cartItem);

    // Tính tổng tiền
    const price = parseFloat(product.price.replace('$', ''));
    totalPrice += price;
  });

  // Cập nhật số lượng sản phẩm và tổng giá
  cartCount.textContent = cart.length;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  // Xóa sản phẩm khỏi giỏ hàng theo chỉ số index
  cart.splice(index, 1);

  // Cập nhật lại Local Storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Hiển thị giỏ hàng khi tải lại trang
document.addEventListener('DOMContentLoaded', renderCart);





// function renderCart() {
//   const cartItems = document.getElementById('cart-items');
//   cartItems.innerHTML = ''; // Xóa nội dung cũ

//   // Duyệt qua danh sách giỏ hàng và hiển thị
//   cart.forEach((product, index) => {
//     const cartItem = document.createElement('li');
//     cartItem.innerHTML = `
//       <img src="${product.image}" alt="${product.name}" width="50" />
//       <span>${product.name}</span>
//       <span>${product.price} VND</span>
//       <button onclick="removeFromCart(${index})">Remove</button>
//     `;
//     cartItems.appendChild(cartItem);
//   });
// }

function removeFromCart(index) {
  // Xóa sản phẩm khỏi giỏ hàng theo chỉ số
  cart.splice(index, 1);

  // Cập nhật lại giỏ hàng trong Local Storage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật lại giỏ hàng hiển thị
  renderCart();
}

// Khi trang được tải, hiển thị giỏ hàng từ Local Storage
document.addEventListener('DOMContentLoaded', renderCart);

