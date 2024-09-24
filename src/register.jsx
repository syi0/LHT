import React from 'react';
import './index.css';
import './register.css'
export default function register() {
    return (
        <div className='register'>
            <form action="">
                <label htmlFor="email"></label>
                <input type="text" name='email' id='email'/> <br/>
                <label htmlFor="password"></label>
                <input type="text" name='password' id='password'/> <br/>
                <label htmlFor="Confirm password"></label>
                <input type="text" name='Confirm password' id='confirmPassword'/> <br/>
                <label htmlFor="username"></label>
                <input type="text" name='username' id='username'/> <br/>
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name'/> <br/>
                <label htmlFor="surname"></label>
                <input type="text" name='surname' id='surname'/> <br/>
                <label htmlFor="Home adress"></label>
                <input type="text" name='Home adress' id='homeAdress'/> <br/>
                <label htmlFor="age"></label> 
                <input type="text" name='age' id='age'/> <br/>
                <label htmlFor="Phone number"></label>
                <input type="text" name='Phone number' id='phoneNumber'/> <br/>
            </form>
           
        </div>
    );
}