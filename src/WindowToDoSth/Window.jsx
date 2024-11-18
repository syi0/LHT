import './Window.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
export default function Window({vsb="hidden"}) {
    const [cookies] = useCookies();
    function handle(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        console.log(cookies);
       axios.post('/api/db/offers/run', {
            query: `INSERT INTO Offers(userId,title,img) VALUES ('${cookies.Id}','${formJson.nazwaUslugi}','https://static.wikia.nocookie.net/silly-cat/images/7/78/Melon_Cat_Species_2.png')`
           
          }).then(function (response) {
            window.location.href = '/shop';
            console.log(response);
          })
    }

    return(
        <div className="window" style={{visibility: vsb}}>
            <form onSubmit={handle}>
                <label htmlFor="nazwaUslugi">Nazwa usługi: </label><input type="text" name="nazwaUslugi" id="nazwaUslugi" /> <br />
                <select  name="typeOfService" id="typeOfService">
                    <option value="first" defaultChecked>First</option>
                    <option value="second">Second</option>
                    <option value="third">Third etc</option>
                    <option value="other"></option>
                </select>
                <input type="text" name="otherType" id="otherType" />
                <input type="submit" value="add offer" />
            </form>
        </div>
    ); 
    
}