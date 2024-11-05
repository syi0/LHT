import './LogoutButton.css'
import { useCookies } from 'react-cookie';
export default function LogoutButton() {
    function logot() {
        removeCookie("Id");
      }
    const [cookies,,removeCookie] = useCookies();
    console.log(cookies['Id']);
    if(cookies['Id']!=undefined) {
    return(
        <button onClick={logot} className='logoutbutton'>Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    );
}
    }

