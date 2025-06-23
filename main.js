let menuImg = document.getElementById('menu-img')
let menuBar = document.querySelector('.menu-bar');
let menuBox = document.querySelector('.menu-box')
let Close = document.getElementById("close")

menuBar.addEventListener('click', () => {
    menuBox.style.display = 'block'
})

Close.addEventListener('click', () => {
    menuBox.style.display = 'none'
})