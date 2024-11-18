import './BlockChain.css'
import sth from '../assets/background2.png'

export default function BlockChain({ title, user,img }) {
    return(
        <div className='kafelek'>
            <img src={img} alt="Zdjęcie ogłoszenia"/>
            <h4 className='offerTitle'>{title}</h4>

            <p className='userId'>{user}</p>
        </div>
    );
}