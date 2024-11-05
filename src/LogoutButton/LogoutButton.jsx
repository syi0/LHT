import './LogoutButton.css'
import { useCookies } from 'react-cookie';
export default function LogoutButton() {
    const [cookies,,removeCookie] = useCookies();
    if(cookies['Id']!=undefined) {
    return(
        <button>Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    );
}
}