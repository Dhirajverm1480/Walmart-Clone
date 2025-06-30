import addToCart from "./utility/addToCart.js";
import NavBar from "./components/navbar.js";
import SideBarDiv from "./components/sideBar.js";
import FooterDiv from "./components/footer.js";

const Header = document.getElementById("header");
Header.appendChild(NavBar())

const SideBar = document.getElementById("sideBar");
SideBar.appendChild(SideBarDiv())

const Footer = document.getElementById('footer')
Footer.appendChild(FooterDiv())

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

console.log("ID: ", productId);

fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((product) => {
    // Display product info here
    console.log("Product", product);

    product.images.forEach((imgUrl) => {
      let LoopOfImg = document.createElement("img");
      LoopOfImg.src = imgUrl;
      document.querySelector(".allImg").appendChild(LoopOfImg);
    });

    let imgBox = document.querySelector(".img-box");
    imgBox.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}"/>
        `;
    document.querySelector(".img-container").appendChild(imgBox);

    let ItemInfo = document.querySelector(".itemInfo");
    ItemInfo.innerHTML = `
            <div class="top-div">
                <p>100 + bought since yesterday</p>
                <p>In 100 + people's cart</p>
            </div>
            <div class="bestSeller">
                <p>BestSeller</p>
            </div>
            <a href="#" class="brand-name">${product.brand}</a>
            <h1 class="product-title">${product.title}</h1>
            <div class="review-container">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating">(${product.rating}) </span>
                <hr>
                <a href="#rating_section" class="review">3 ratings</a>
            </div>
            <hr>
            <h3 class="item-description-heading">About this Item</h3>
            <p class="item-description">${product.description}</p>
            <hr>
            <h2 class="item-glance-heading">At a glance</h2>
            <div class="glance-div">
                <div class="glance-brand glance">
                    <h4 class="glance-title">Brand</h4>
                    <p class="glance-para">${product.brand}</p>
                </div>
                <div class="glance-dimensions glance">
                    <h4 class="glance-title">Dimensions</h4>
                    <p>${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} inches</p>
                </div>
                <div class="glance-pieces glance">
                    <h4 class="glance-title">Piece</h4>
                    <p class="glance-para">${product.stock}</p>
                </div>
                <div class="glance-features glance">
                    <h4 class="glance-title">Feature</h4>
                    <p class="glance-para"></p>
                </div>
                <div class="glance-conditon glance">
                    <h4 class="glance-title">Condition</h4>
                    <p class="glance-para"></p>
                </div>
                <div class="glance-floor glance">
                    <h4 class="glance-title"></h4>
                    <p class="glance-para"></p>
                </div>
            </div>
            <a class="glance-a" href="#">Veiw all specification</a>
            <hr class="glance-hr">
        `;
    document.querySelector(".productInfo-container");

    let paymentBox = document.querySelector(".payment-box");
    paymentBox.innerHTML = `
            
            <span class="price-title">Now</span><span class="price"> $${product.price}</span>
            <br>
            <span class="discount-title">You Save</span><span class="discountPercentage"> $${product.discountPercentage}</span>
        `;

    // Add to cart btn

    let cartBtn = document.createElement("button");
    cartBtn.classList.add("cart-btn");
    cartBtn.innerHTML = "Add to Cart";

    let cartBtnBox = document.querySelector(".cartBtnBox");
    cartBtnBox.innerHTML = ``;
    cartBtnBox.appendChild(cartBtn);

    cartBtn.addEventListener("click", () => {
      console.log("Add to cart clicked");
      addToCart(product);
    });

    let category = product.category;
    console.log("Category: ", category);
    loadProducts(category);

    loadReviews(product);
  })
  .catch((err) => {
    console.error("Failed to load product", err);
  });

async function loadProducts(category) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await res.json();

    data.products.forEach((product) => {
      let Category = document.createElement("div");
      Category.classList.add("product-wrapper");
      Category.innerHTML = `
                <button class="wish-btn">🤍</button>
                <a href="productInfo.html?id=${product.id}">
                    
                    <img src="${product.thumbnail}" alt="${product.title}" class="wrapper-img"/>
                    <h4> $ ${product.price}</h4>
                    <p>${product.title}</p>
                </a>
                <button class="cart-btn"> Add to Cart</button>
      `;

      document.querySelector(".category-section").appendChild(Category);

      const cartBtn = Category.querySelector('.cart-btn');
            cartBtn.addEventListener('click', () => {
                addToCart(product)
            })
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function loadReviews(product){
  product.reviews.map(review => {
    // console.log("Review: ",review)
    let reviewBox = document.createElement('div');
    reviewBox.classList.add('review-box');
    reviewBox.innerHTML = `
      <p>${review.rating}</p>
      <p>${review.comment}</p>
      <p>${review.date}</p>
      <p>${review.reviewerName}</p>
      <p>${review.reviewerEmail}</p>
      
    `;
    document.querySelector('.review-section').appendChild(reviewBox)
  })

  
}