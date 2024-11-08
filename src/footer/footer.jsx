import './footer.css'

    function Footer(){
        return(
            <footer className = 'linkList'>
               <ul>
                <li><a href="mailto:support@bigservice.com"><i class="fa-solid fa-envelope"></i> support@bigservice.com</a></li>
                <li><a href="tel:+48111111111"><i class="fa-solid fa-phone"></i> +48 111 111 111</a></li>
                <li><i class="fa-regular fa-copyright"></i> BigService</li>
               </ul>
            </footer>
        );
    }

export default Footer;