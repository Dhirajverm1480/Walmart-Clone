import NavBar from "./components/navbar.js";
import FooterDiv from "./components/footer.js";

const Header = document.getElementById("header");
Header.appendChild(NavBar())

const Footer = document.getElementById('footer')
Footer.appendChild(FooterDiv())