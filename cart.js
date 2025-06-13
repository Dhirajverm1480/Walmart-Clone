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
                <img src="${item.image}" alt="">
                <hr>
                <div class="cartDetail">
                    <h2 class="cartTitle">${item.title}</h2>
                    <div class="cartMoreDetail">
                        <span class="item-brand">${item.brand}</span>
                        <div class="rating-price">
                            <span class="stars"></span>
                            <span class="rating">${item.rating}</span>
                            <hr>
                            <span class="price">$${item.price}</span>
                        </div>
                        <div>${item.quantity}</div>
                        <button class="remove-btn" data-id="${item.id}">Remove</button>
                    </div>
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
