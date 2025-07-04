import NavBar from "./components/navbar.js";
import SideBarDiv from "./components/sideBar.js";
import FooterDiv from "./components/footer.js";
import addToCart from "./utility/addToCart.js";

document.addEventListener("DOMContentLoaded", () => {
  const Header = document.getElementById("header");
  Header.appendChild(NavBar());

  const SideBar = document.getElementById("sideBar");
  SideBar.appendChild(SideBarDiv());

  const Footer = document.getElementById("footer");
  Footer.appendChild(FooterDiv());
  displayWishData();
});

function displayWishData() {
  let wishData = JSON.parse(localStorage.getItem("wish")) || [];
  if (wishData.length === 0) {
    let wishLi = document.createElement("li");
    wishLi.textContent = "No wishes yet!";
    return;
  }

  const wishSection = document.querySelector(".product-section");
  wishSection.innerHTML = "";

  wishData.forEach((item) => {
    let productWrapper = document.createElement("div");
    productWrapper.classList.add("product-wrapper");

    productWrapper.innerHTML = `
                <button class="wish-btn">🧡</button>
                <a href="productInfo.html?id=${item.id}">
                    
                    <img src="${item.image}" alt="${item.title}" class="wrapper-img"/>
                    <h4> $ ${item.price}</h4>
                    <p>${item.title}</p>
                </a>
                <button class="cart-btn"> Add to Cart</button>
            `;
    wishSection.appendChild(productWrapper);
    const cartBtn = productWrapper.querySelector(".cart-btn");
    cartBtn.addEventListener("click", () => {
      addToCart(item);
    });
  });
}
