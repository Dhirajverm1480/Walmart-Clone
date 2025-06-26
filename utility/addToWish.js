function addToWish(product){
    let wishData = JSON.parse(localStorage.getItem('wish')) || [];
    let wishExistingData = wishData.find(item => item.id === product.id);
    if(wishExistingData) {
        alert("Product all ready exists")
        return
    }else{
        wishData.push({ id: product.id, quantity: 1, title: product.title, price: product.price, rating: product.rating, image: product.thumbnail })
    }

    localStorage.setItem('wish', JSON.stringify(wishData));
    alert("product add successfully in wishList");
}

export default addToWish