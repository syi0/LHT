import './Nav.css';

function Nav() {
    return(
        <nav>
            <ul className='navList'>
                <li><a href="#">Home <i class="fa-solid fa-house"></i></a></li>
                <li><a href="#">Shop <i class="fa-solid fa-shop"></i></a></li>
                <li><a href="https://github.com/syi0/LHT/">GitHub <i class="fa-brands fa-github"></i></a></li>
                <li><a href="#">Login <i class="fa-solid fa-user"></i></a></li>
                <li><a href="#">Register <i class="fa-regular fa-user"></i></a></li>
            </ul>
        </nav>
    );
}

export default Nav;