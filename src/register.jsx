import React from 'react';
import './index.css';
import './Register.css'
export default function Register() {
    return (
        <div className='register'>
            <form action="">
                <label htmlFor="email">Email: </label><br/>
                <input type="text" name='email' id='email'/> <br/>
                <label htmlFor="password">Password: </label><br/>
                <input type="text" name='password' id='password'/><br/>
                <label htmlFor="Confirm password">Confirm password:</label><br/>
                <input type="text" name='Confirm password' id='confirmPassword'/><br/>
                <label htmlFor="username">Username</label><br/>
                <input type="text" name='username' id='username'/> <br/>
                <label htmlFor="name">Name</label><br/>
                <input type="text" name='name' id='name'/><br/>
                <label htmlFor="surname">Surname</label><br/>
                <input type="text" name='surname' id='surname'/> <br/>
                <label htmlFor="Home adress">Home adress</label><br/>
                <input type="text" name='Home adress' id='homeAdress'/> <br/>
                <label htmlFor="age">Age</label> <br/>
                <input type="text" name='age' id='age'/><br/>
                <label htmlFor="Phone number">Phone number</label><br/>
                <input type="text" name='Phone number' id='phoneNumber'/> <br/>
            </form>
           
        </div>
    );
}