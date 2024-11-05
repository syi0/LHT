import './Nav.css';
import LogoutButton from '../LogoutButton/LogoutButton.jsx';

function Nav() {
    return(
        <nav>
            <ul className='navList'>
                <li><a href="/">Home <i class="fa-solid fa-house"></i></a></li>
                <li><a href="/shop">Shop <i class="fa-solid fa-shop"></i></a></li>
                <li><a href="https://github.com/syi0/LHT/">GitHub <i class="fa-brands fa-github"></i></a></li>
                <li><a href="/login">Login <i class="fa-solid fa-user"></i></a></li>
                <li><a href="/register">Register <i class="fa-regular fa-user"></i></a></li>
                <li><a href=""><LogoutButton /></a></li>
            </ul>
        </nav>
    );
}

export default Nav;