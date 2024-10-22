import React from 'react';
import '../index.css';
import './Login.css'
export default function Test() {
    return (
        <form action="">
           <label htmlFor="email">Email: </label>
           <input type="email" name="email" id="email" />
           <label htmlFor="password">Password: </label>
           <input type="password" name="password" id="password" />
        </form>
    );
}