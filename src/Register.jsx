import React,{useState} from "react";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';

export const Register = (props) =>{
    
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    
    const [error,setError]=useState("");

    const handleSubmit=async (e)=>
    {
        e.preventDefault()
           
            await createUserWithEmailAndPassword(auth, email, pass)
              .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user,"Created succesfully");
                  setError("Registered");
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
    <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Full Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Enter your FullName"/>
        
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email"/>

        <label htmlFor="password">password</label>
        <input value={pass} type="password" onChange={(e)=> setPass(e.target.value)} id="password" name="password" placeholder="Enter your password"/>

        <button type="submit">Register</button>

        <h4 style={{color: "red"}}>{error}</h4>

    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
        );
}