import './Nav.css';

function NavSmall() {
    return(
        <nav className='navListSmall'>
            <ul>
                <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-shop"></i></a></li>
                <li><a href="https://github.com/syi0/LHT/"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
                <li><a href="#"><i class="fa-regular fa-user"></i></a></li>
            </ul>
        </nav>
    );
}

export default NavSmall