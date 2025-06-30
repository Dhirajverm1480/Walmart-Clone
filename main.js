import NavBar from "./components/navbar.js";
import FooterDiv from "./components/footer.js";
import SideBarDiv from "./components/sideBar.js";
import addToCart from "./utility/addToCart.js";
import addToWish from "./utility/addToWish.js";

displayComponent();

function displayComponent() {
  const Header = document.getElementById("header");
  Header.appendChild(NavBar());

  const SideBar = document.getElementById("sideBar");
  SideBar.appendChild(SideBarDiv());

  const Footer = document.getElementById("footer");
  Footer.appendChild(FooterDiv());
}

const dataFetchng = async () => {
  try {
    console.log("Working");
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data: ", data.products);

    let productSection = document.querySelector(".product-section");

    data.products.forEach((product) => {
      let productWrapper = document.createElement("div");
      productWrapper.classList.add("product-wrapper");

      productWrapper.innerHTML = `
                <button class="wish-btn">🤍</button>
                <a href="productInfo.html?id=${product.id}">
                    
                    <img src="${product.thumbnail}" alt="${product.title}" class="wrapper-img"/>
                    <h4> $ ${product.price}</h4>
                    <p>${product.title}</p>
                </a>
                <button class="cart-btn"> Add to Cart</button>
            `;
      productSection.appendChild(productWrapper);

      const cartBtn = productWrapper.querySelector(".cart-btn");
      cartBtn.addEventListener("click", () => {
        addToCart(product);
      });

      const wistBtn = productWrapper.querySelector(".wish-btn");
      wistBtn.addEventListener("click", () => {
        wistBtn.innerHTML = "🧡";
        addToWish(product);
      });
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

dataFetchng();

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    SideBar.style.display = "none";
  }
  // else if (e.key === "Shift") {
  //   SideBar.style.display = 'block';
  // }
});

// Feed

let feedBtn = document.getElementById("feedBtn");
let feedBox = document.querySelector(".feed-side-box");
feedBtn.addEventListener("click", () => {
  console.log("Ok");
  if (feedBox.style.display === "block") {
    feedBox.style.display = "none";
  } else {
    feedBox.style.display = "block";
  }
});
