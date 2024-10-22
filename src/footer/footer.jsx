import './footer.css'

    function Footer(){
        return(
            <footer className = 'linkList'>
               <ul>
                <li><i class="fa-solid fa-envelope"></i>BigService@bigservice.com</li>
                <li><i class="fa-solid fa-phone"></i>+48 123456789</li>
                <li><i class="fa-regular fa-copyright"></i>BigService&trade; {(new Date().getFullYear())}</li>
               </ul>
            </footer>
        );
    }

export default Footer;