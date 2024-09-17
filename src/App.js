import logo from './logo.svg';
import './App.css';
import { useCookies } from 'react-cookie';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     
      </header>
    </div>
  );
}
else {
  window.open("login","_self");
}

}

export default App;
