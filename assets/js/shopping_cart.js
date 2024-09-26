// Hàm đổ dữ liệu từ giỏ hàng qua cart
function displayCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
  
    let cartHTML = '';
    for (let i = 0; i < cart.length; i++) {
      cartHTML += `
        <tr>
          <td class="product_id" style="display: none;">${cart[i].id}</td>
          <td class="product_thumb"><a href="#"><img src="${cart[i].image}" alt=""></a></td>
          <td class="product_name"><a href="#">${cart[i].name}</a></td>
          <td class="product-price">${cart[i].price}</td>
          <td class="product_quantity"><input min="0" max="100" value="${cart[i].quantity }" type="number" ></td>
          <td class="product_total">${cart[i].price * cart[i].quantity}</td>
            <td class="product_remove"><a href="#" onclick="removeFromCart(${i})"><i class="fa fa-trash-o"></i></a></td>
        </tr>
      `;
    }
  
    document.querySelector('.cart_page tbody').innerHTML = cartHTML;
  }
  
  // Hàm xóa sản phẩm khỏi giỏ hàng
  function removeFromCart(index) {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
  
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  
  // Gọi hàm displayCart khi trang tải xong
  displayCart();

  // Hàm cập nhật số lượng sản phẩm
function updateQuantity(input, index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart[index].quantity = parseInt(input.value);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

  