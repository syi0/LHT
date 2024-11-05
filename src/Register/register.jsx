import React from 'react';
import '../index.css';
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
          query: `SELECT COUNT(*) FROM Login WHERE username='${formJson.username}' AND email='${formJson.email}'`
         
        })
        .then(function (response) {
          console.log(response);
          if(response.data[0]["COUNT(*)"]==0) {
              console.log("can register");
              console.log(formJson.password);
              console.log(formJson.confirmPassword);
              if(formJson.password.toString()==formJson.confirmPassword.toString()) {
                console.log("registering");
              
              axios.post('/api/db/run', {
                query: `INSERT INTO Login(Email,Pasword,Adress,Age,Username,PhoneNumber,PostCode,Surname,Name) VALUES ('${formJson.email}','${formJson.password}','${formJson.adress}','${formJson.age}','${formJson.username}','${formJson.phoneNumber}','pstcode','${formJson.surname}','${formJson.name}')`
               
              }).then(function (response) {
                window.location.href = '/login';
                console.log(response);
              })
            }
          }
        })
        
      }
    return (
        <div className='register' onSubmit={handleSubmit}>
          
            <form action="">
            <h1>Zarejestruj się!</h1>
                <label htmlFor="email">Email: </label> <br/>
                <input type="text" name='email' id='email'/> <br/>
                <label htmlFor="password">Password: </label><br/>
                <input type="text" name='password' id='password'/><br/>
                <label htmlFor="confirmPassword">Confirm password:</label><br/>
                <input type="text" name='confirmPassword' id='confirmPassword'/><br/>
                <label htmlFor="username">Username</label><br/>
                <input type="text" name='username' id='username'/> <br/>
                <label htmlFor="name">Name</label><br/>
                <input type="text" name='name' id='name'/><br/>
                <label htmlFor="surname">Surname</label><br/>
                <input type="text" name='surname' id='surname'/> <br/>
                <label htmlFor="adress">Home adress</label><br/>
                <input type="text" name='adress' id='adress'/> <br/>
                <label htmlFor="age">Age</label><br/>
                <input type="text" name='age' id='age'/><br/>
                <label htmlFor="phoneNumber">Phone number</label><br/>
                <input type="text" name='phoneNumber' id='phoneNumber'/> <br/> <br/>
                <button type='submit'>Register</button>
            </form>
           
        </div>
    );
}