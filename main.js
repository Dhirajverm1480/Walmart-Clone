import addToCart from './utility/addToCart.js'

const dataFetchng = async () => {
    try {
        console.log("Working")
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json()
        console.log("Data: ", data.products)

        let productSection = document.querySelector('.product-section');

        data.products.forEach((product) => {
            let productWrapper = document.createElement('div');
            productWrapper.classList.add('product-wrapper');

            productWrapper.innerHTML =
                `
                <button class="wish-btn">🤍</button>
                <a href="productInfo.html?id=${product.id}">
                    
                    <img src="${product.thumbnail}" alt="${product.title}" class="wrapper-img"/>
                    <h4> $ ${product.price}</h4>
                    <p>${product.title}</p>
                </a>
                <button class="cart-btn"> Add to Cart</button>
            `
                ;
            productSection.appendChild(productWrapper);

            const cartBtn = productWrapper.querySelector('.cart-btn');
            cartBtn.addEventListener('click', () => {
                addToCart(product)
            })

            const wistBtn = productWrapper.querySelector('.wish-btn');
            wistBtn.addEventListener('click', () => {
                wistBtn.innerHTML = '🧡';
            })
        });

    } catch (error) {
        console.log("Error: ", error)
    }

}

dataFetchng()

let MenuBar = document.getElementById('menuBar');
let SideBar = document.getElementById('sideBar')

MenuBar.addEventListener('click', () => {
    console.log("I am click");
    if (SideBar.style.display === 'block') {
        SideBar.style.display = 'none'
    }
    else {
        SideBar.style.display = 'block'
    }

})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        SideBar.style.display = 'none';
    }
    else if (e.key === "Control") {
        SideBar.style.display = 'block';
    }
})