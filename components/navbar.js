function NavBar() {
  const Nav = document.createElement("div");
  Nav.classList.add("nav-box");
  Nav.innerHTML = `
        <nav class="top-nav">
        <div id="menuBar" class="menuBar">
          <img src="assets/bars-solid.svg" alt="" />
        </div>
        <a href="index.html" class="logo"
          ><img src="assets/image1.png" alt=""
        /></a>

        <div class="deliveryBox">
          <img src="assets/image.png" alt="" />
          <div class="deliveryBox-info">
            <p>PickUp or Delivery</p>
            <p>Sacramento, 99999</p>
          </div>
        </div>
        <div class="search-wrapper">
          <input
            type="search"
            placeholder="Search Everything at Walmart online and in store"
          />
          <hr />
          <button>🔎</button>
        </div>
        <div class="myitemBox">
          <div>🤍</div>
          <div>
            <span>Reorder</span>
            <span>My Items</span>
          </div>
          <div class="myItemDropDown">
            <a href="">Reorder</a>
            <a href="wish.html">List</a>
            <a href="">Register </a>
          </div>
        </div>
        <div class="accountBox">
          <a href="registeration.html">Sign In</a>
          <div>Account</div>
        </div>
        <a href="cart.html" class="cartBox">
          <div>🛒</div>
          <div id="cartPrice">$ 0.00</div>
        </a>
      </nav>

      <nav class="mid-nav">
        <div class="min-nav-dropDown">
          <img src="" alt="" />
          <button class="depart-btn">Departmants</button>
          <img src="" alt="" />
        </div>
        <div class="min-nav-dropDown">
          <img src="" alt="" />
          <button class="service-btn">Services</button>
          <img src="" alt="" />
        </div>
        <span class="line-stick">|</span>
        <div class="mid-a-container">
          <a href="#" class="mid-nav-a">Get it Fast</a>
          <a href="#" class="mid-nav-a">My Items</a>
          <a href="" class="mid-nav-a">Pharmacy Delivery</a>
          <a href="" class="mid-nav-a">Dinner Solution</a>
          <a href="" class="mid-nav-a">4th of July</a>
          <a href="" class="mid-nav-a">Trending</a>
          <a href="" class="mid-nav-a">Swim Shop</a>
          <a href="" class="mid-nav-a">New Arrival</a>
          <a href="" class="mid-nav-a">Walmart+</a>
        </div>

        <div class="min-nav-dropDown">
          <button class="more-btn">More</button>
          <img src="" alt="" />
        </div>
      </nav>
    `;

  let myItemBox = Nav.querySelector(".myitemBox");
  let myDropDown = Nav.querySelector(".myItemDropDown");
  myItemBox.addEventListener("click", () => {
    if (myDropDown.style.display === "block") {
      myDropDown.style.display = "none";
    } else {
      myDropDown.style.display = "block";
    }
  });

  //   Side Bar Handle

  const SideBar = document.querySelector("#sideBar");
  let MenuBar = Nav.querySelector("#menuBar");

  MenuBar.addEventListener("click", () => {
    console.log("I am click");
    if (SideBar.style.display === "block") {
      SideBar.style.display = "none";
    } else {
      SideBar.style.display = "block";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      SideBar.style.display = "none";
    }
    // else if (e.key === "Shift") {
    //   SideBar.style.display = 'block';
    // }
  });

  // cart Data

  cartPriceAdd(Nav);

  return Nav;
}

export default NavBar;

function cartPriceAdd(Nav){
  // let cartBox = Nav.querySelector('.cartBox')x
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  let cartPriceElement = Nav.querySelector("#cartPrice");

  // If cartData is an array of items with `price` property
  const total = cartData.reduce((sum, item) => sum + (item.price || 0), 0);

  cartPriceElement.textContent = `$ ${total.toFixed(2)}`;
}