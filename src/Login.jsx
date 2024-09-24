import React from 'react';
import './index.css';
import './Login.css'
export default function Test() {
    function logg(formData) {
        console.log(formData)
    }
    return (
        <div>
            <form action={logg}>
                <label htmlFor="email">Email: </label><br />
                <input type="email" name="email" id="email" /><br />
                <label htmlFor="password">Password: </label><br />
                <input type="password" name="password" id="password" /><br /><br />
                <input type="submit"></input>
           </form>
        </div>
    );
}