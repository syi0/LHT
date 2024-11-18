import './Shop.css'
import { useCookies } from 'react-cookie';
import  { Navigate  } from 'react-router-dom';
import Window from '../WindowToDoSth/Window';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlockChain from '../BlockChain/BlockChain';
export default function Shop() {
    const [cookies] = useCookies();
    const [offers,setOffers]=useState();
    const [users,setUsers]=useState();
    const [vsbi,setVsbi]=useState("hidden");

    useEffect(()=> {
        const qr2=`SELECT Id,Username FROM Login`;
        axios.post('/api/db', {
            query: qr2
            
        })
        .then(function (response) {
            
            if(response.data[0]!=undefined) {
            let usrstmp=[];
            response.data.forEach(element => {
                usrstmp[element.Id]=element.Username;
            });
            setUsers(usrstmp);
            }
        })
    },[]);

    useEffect(()=> {
    const qr=`SELECT * FROM Offers`;
    axios.post('/api/db/offers', {
      query: qr
     
    })
    .then(function (response) {
        
      if(response.data[0]!=undefined) {
     
     console.log(users)
         setOffers(response.data.map(offer => <BlockChain user={users[offer.userId]} title={offer.title} img={offer.img}/>));
        
        }
    })
},[users]);

    console.log(users);
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
                <button onClick={() => { setVsbi("visible")}}>Add offer</button>
                <Window vsb={vsbi}/>
                
            </ul>
        </nav>
            <main>
                <button>Create your offer!</button>
              {offers}
            </main>
        </div>
    );
}

}

