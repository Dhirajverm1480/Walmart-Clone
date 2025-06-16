document.addEventListener("DOMContentLoaded", () => {
  displayCartData();
});

function displayCartData() {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartData.length === 0) {
    let cartLi = document.createElement("li");
    cartLi.textContent = "Your cart is empty";
    return;
  }

  const cartSection = document.getElementById("cartItem-section");

  cartSection.innerHTML = ``;

  cartData.forEach((item) => {
    // Create a list item for each product
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
              <span class="cart-sold">Sold and Shipped by <a href="#">Walmart</a></span>
              <p class="free-shipping">Free Shipping on orders over $35</p>
              <p class="cart-best-seller">Best Seller</p>
              <div class="cart-item-div-flex">
                <img src="${item.image}" alt="">
                <div class="cartDetail">
                    <span class="cartTitle">${item.title}</span>
                    <span class="return-policy">Free 90-day return</span> 
                    <span class="gift-div">Gift eligible: original packaging</span>
                </div>
                <div class="price-div">
                  <span>$${item.price}</span>
                </div>
                
              </div>
              <div class="remove-quantity">
                      <div>${item.quantity}</div>
                      <button class="remove-btn" data-id="${item.id}">Remove</button>
                    </div>
        `;

    // Append to the cart list
    cartSection.appendChild(cartItem);
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });

  function removeFromCart(productId) {
    // Get cart data
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove item from cart
    cartData = cartData.filter((item) => item.id !== productId);

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cartData));

    // Re-display the updated cart
    displayCart();
  }
}
