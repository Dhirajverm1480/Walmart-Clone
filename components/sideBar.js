let sideBar = document.getElementById('sideBar')

function SideBarDiv (){
    let sideBox = document.createElement('div')
    sideBox.classList.add('side-box')

    sideBox.innerHTML = `
        <button id="close" class="close">X</button>
      <div class="side-top">
        <a href="index.html" class="logo"
          ><img src="assets/image1.png" alt=""
        /></a>
        <span>Sign in or create account</span>
      </div>

      <div class="side-bottom">
        <div>
          <span>Language | English</span>
        </div>
        <hr />
        <div>
          <span>Walmart +</span>
        </div>
        <hr />
        <div >
          <p>Purchase History</p>
          <a href="wish.html">My Items</a>
          <p>Account</p>
        </div>
        <hr />
        <div>
          <p>Help</p>
        </div>
        <hr />
        <div>
          <p>Lists</p>
          <p>Registries</p>
        </div>
        <hr />
        <div>
          <p>Departments</p>
          <p>Services</p>
        </div>
        <div>
          <p>Give Feedback</p>
        </div>
      </div>
    `

    const close = sideBox.querySelector('#close')
    close.addEventListener('click', () => {
        sideBar.style.display = 'none'
    })
    return sideBox
}
export default SideBarDiv