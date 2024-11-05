import './Shop.css'
import { useCookies } from 'react-cookie';
import  { Navigate  } from 'react-router-dom';
export default function Shop() {
    const [cookies] = useCookies();
  
    console.log(cookies['Id']);
    if(cookies['Id']==undefined) {
       return  <Navigate  to='/login'  />
    } else { 
    return(
        <div className='main'>
            <nav>
            
            <ul className='navList'>
                <li><a href="/">Home <i class="fa-solid fa-house"></i></a></li>
                <li><a href="/shop">Shop <i class="fa-solid fa-shop"></i></a></li>
                <li><a href="https://github.com/syi0/LHT/">GitHub <i class="fa-brands fa-github"></i></a></li>
                <li><a href="/login">Login <i class="fa-solid fa-user"></i></a></li>
                <li><a href="/register">Register <i class="fa-regular fa-user"></i></a></li>
            </ul>
        </nav>
            <main>
                <button>Create your offer!</button>
                
            </main>
        </div>
    );
}
}
