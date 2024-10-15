import './footer.css'

    function Footer(){
        return(
            <footer className = 'linkList'>
               <ul>
                    <li><a href="#"><i class="fa-solid fa-house"></i>Home</a></li>
                    <li><a href="#"><i class="fa-solid fa-shop"></i>Shop</a></li>
                    <li><a href="https://github.com/syi0/LHT/"><i class="fa-brands fa-github"></i>GitHub</a></li>
                    <li><a href="#"><i class="fa-solid fa-user"></i>Login</a></li>
                    <li><a href="#"><i class="fa-regular fa-user"></i>Register </a></li>
               </ul>
            </footer>
        );
    }

export default Footer;