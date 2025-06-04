const dataFetchng = async () => {
    try {
        console.log("Working")
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
       
        const data = await response.json()
        console.log("Data: ", data.products)

    } catch (error) {
        console.log("Error: ", error)
    }

}

dataFetchng()

let MenuBar = document.getElementById('menuBar');
let SideBar = document.getElementById('sideBar')

MenuBar.addEventListener('click', (e) => {
    console.log("I am click");
    if(SideBar.style.display === 'block'){
        SideBar.style.display = 'none'
    }
    else{
        SideBar.style.display = 'block'
    }
    
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        SideBar.style.display = 'none';
    }
    else if(e.key=== "Control"){
        SideBar.style.display = 'block';
    }
})