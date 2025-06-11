import addToCart from './utility/addToCart.js'

const params = new URLSearchParams(window.location.search)
const productId = params.get('id')

console.log("ID: ", productId)

fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        // Display product info here
        console.log("Product", product);

        product.images.forEach(imgUrl => {
            let LoopOfImg = document.createElement('img');
            LoopOfImg.src = imgUrl;
            document.querySelector('.allImg').appendChild(LoopOfImg)
        });
                
        let imgBox = document.querySelector('.img-box')
        imgBox.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}"/>
        `
        document.querySelector('.img-container').appendChild(imgBox);

        let ItemInfo = document.querySelector('.itemInfo')
        ItemInfo.innerHTML = `
            <a href="#" class="brand-name">${product.brand}</a>
            <h3 class="product-title">${product.title}</h3>
            <div class="review-container">
                <span class="stars"></span>
                <span class="review">${product.review}</span>
                <hr>
                <a href="#" class="rating">${product.rating}ratings</a>
            </div>
            <hr>
            <h3 class="item-description-heading">About this Item</h3>
            <p class="item-description">${product.description}</p>
            <hr>
            <h3 class="item-glance">At a glance</h3>
            <div class="glance-div">
                <div class="glance-brand glance">
                    <h4 class="glance-title">Brand</h4>
                    <p class="glance-para">${product.brand}</p>
                </div>
                <div class="glance-dimensions glance">
                    <h4 class="glance-title">Dimensions</h4>
                    <p class="glance-para"><strong>Width: </Strong>${product.dimensions.width}</p>
                    <p class="glance-para"><strong>Height: </Strong>${product.dimensions.height}</p>
                    <p class="glance-para"><strong>Depth: </Strong>${product.dimensions.depth}</p>
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
            <a href="#">Veiw all specification</a>
            <hr>
        `
        document.querySelector('.productInfo-container')

        let paymentBox = document.querySelector('.payment-box')
        paymentBox.innerHTML = `
            <span class="price-title">Now</span><span class="price"> $${product.price}</span>
            <br>
            <span class="discount-title">You Save</span><span class="discountPercentage"> $${product.discountPercentage}</span>
        `;

        // Add to cart btn

        let cartBtn = document.createElement('button')
        cartBtn.classList.add('cart-btn')
        cartBtn.innerHTML = 'Add to Cart'

        let cartBtnBox = document.querySelector('.cartBtnBox')
        cartBtnBox.innerHTML= ``;
        cartBtnBox.appendChild(cartBtn)

        cartBtn.addEventListener('click', () => {
            console.log('Add to cart clicked')
            addToCart(product)
        })

    })
    .catch(err => {
        console.error('Failed to load product', err);
    });


            // function addToCart (product) {

            //     // let cartRaw = localStorage.getItem('cart');
            //     // let cartData = [];

            //     // try {
            //     //     cartData = cartRaw ? JSON.parse(cartRaw) : [];
            //     // } catch (e) {
            //     //     console.warn('Invalid JSON in localStorage, clearing cart...');
            //     //     localStorage.removeItem('cart');
            //     //     cartData = [];
            //     // }

                
            //     let cartData = JSON.parse(localStorage.getItem('cart')) || [];
            //     let existingData = cartData.find( item => item.id === product.id);
            //     if(existingData){
            //         existingData.quantity += 1
            //     } else{
            //         cartData.push({id: product.id, quantity: 1, title: product.title, price: product.price, rating: product.rating, image: product.thumbnail})
            //     }

            //     localStorage.setItem('cart', JSON.stringify(cartData))
            //     alert('product added to cart')
            // }