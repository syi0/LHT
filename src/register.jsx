import React from 'react';
import './index.css';
import axios from 'axios';
import './Register.css'
export default function Register() {
 
    
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        console.log(formJson.username);
        axios.post('/api/db', {
            query: "SELECT COUNT(*) FROM test WHERE username='"+formJson.username+"'"
         
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    return (
        <div className='register' onSubmit={handleSubmit}>
            <form action="">
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' id='email'/> <br/>
                <label htmlFor="password">Password: </label>
                <input type="text" name='password' id='password'/><br/>
                <label htmlFor="Confirm password">Confirm password:</label>
                <input type="text" name='Confirm password' id='confirmPassword'/><br/>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username'/> <br/>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name'/><br/>
                <label htmlFor="surname">Surname</label>
                <input type="text" name='surname' id='surname'/> <br/>
                <label htmlFor="Home adress">Home adress</label><br/>
                <input type="text" name='Home adress' id='homeAdress'/> <br/>
                <label htmlFor="age">Age</label>
                <input type="text" name='age' id='age'/><br/>
                <label htmlFor="Phone number">Phone number</label>
                <input type="text" name='Phone number' id='phoneNumber'/> <br/>
                <input type="submit" />
            </form>
           
        </div>
    );
}