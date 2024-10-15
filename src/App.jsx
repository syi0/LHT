import './App.css';
import { useCookies } from 'react-cookie';
import Nav from './Nav/Nav.jsx'
import Body from './body/body.jsx'
import Footer from './footer/footer.jsx'
import NavSmall from './Nav/NavSmall.jsx'

import axios from 'axios';
function App(props) {
  console.log(props);
  const [cookies, setCookie] = useCookies();
  axios.post('/api/db', {
    query: "SELECT rowid,info AS id FROM lorem"
 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  if(cookies["userId"]===undefined) {
    
  
  return (
    <>
      <Nav />
      <NavSmall />
      <Body />
      <Footer />
    </>
  );
}
else {
  window.open("login","_self");
}

}

export default App;
