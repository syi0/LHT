import './Nav.css'

function Nav() {
    return(
        <nav>
            <ul className='navList'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="https://github.com/syi0/LHT/">GitHub</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
    );
}

export default Nav;