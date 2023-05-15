import React, { useState } from "react";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {useNavigate } from 'react-router-dom';
import { auth } from './firebase';

export const Login = (props) =>{
    
    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");

    const [error,setError]=useState("");

    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user,"Logged in");
            setError("Logged In");
            navigate("/welcome",{
                state:{
                    name:user.email,
                }
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorCode, errorMessage);
        });
    }

    return (
    <div className="auth-form-container">
    <h1 text-align="center">BANDERSNATCH</h1>
    <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email"/>

        <label htmlFor="password">password</label>
        <input value={pass} type="password" onChange={(e)=> setPass(e.target.value)} id="password" name="password" placeholder="Enter your password"/>

        <button type="submit">LOG IN</button>
        <h4 style={{color: "red"}}>{error}</h4>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
        );
}