import './Shop.css'
import { useCookies } from 'react-cookie';
import { redirect } from 'react-router-dom';
export default function Shop() {
    const [cookies,,removeCookie] = useCookies();
    removeCookie('Id');
    console.log(cookies['Id']);
    if(cookies['Id']==undefined) {
       return redirect("/login");
    } else { 
    return(
        <div className='main'>
            <nav>
                <li><a href="">x</a></li>
                <li><a href="">x</a></li>
                <li><a href="">x</a></li>
                <li><a href="">x</a></li>
            </nav>
            <main>
                <button>Create your offer!</button>
                
            </main>
        </div>
    );
}
}
