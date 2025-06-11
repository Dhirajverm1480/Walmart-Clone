function addToCart(product) {

    // let cartRaw = localStorage.getItem('cart');
    // let cartData = [];

    // try {
    //     cartData = cartRaw ? JSON.parse(cartRaw) : [];
    // } catch (e) {
    //     console.warn('Invalid JSON in localStorage, clearing cart...');
    //     localStorage.removeItem('cart');
    //     cartData = [];
    // }


    let cartData = JSON.parse(localStorage.getItem('cart')) || [];
    let existingData = cartData.find(item => item.id === product.id);
    if (existingData) {
        existingData.quantity += 1
    } else {
        cartData.push({ id: product.id, quantity: 1, title: product.title, price: product.price, rating: product.rating, image: product.thumbnail })
    }

    localStorage.setItem('cart', JSON.stringify(cartData))
    alert('product added to cart')
}

export default addToCart