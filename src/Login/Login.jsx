import React from 'react';
import axios from 'axios';
import '../index.css';
import './Login.css'
export default function Test() {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.email);
    let qr=`SELECT Id FROM Login WHERE email='${formJson.email}' AND Pasword='${formJson.password}'`;
    axios.post('/api/db', {
      query: qr
     
    })
    .then(function (response) {
      console.log(response);
    })

}
    return (
      <div className='Login'>
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1> <br />
            <label htmlFor="email">Email: </label> <br />
            <input type="email" name="email" id="email" /> <br /><br />
            <label htmlFor="password">Password: </label> <br />
            <input type="password" name="password" id="password" /> <br /> <br />
            <button type="submit">Login!</button>
          </form>
        </div>
    );
}