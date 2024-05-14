import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import axios from 'axios';



export const Register = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = async (e) => {
    console.log(email)
    console.log(e)
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        password
      });
      console.log('register was sucessful :', response.data);

    } catch (error) {
      console.log("dont possible make registration", error)
    }


  }
  return (
    
    <div className='form-container'>
        <h1>GAME COIN CLICKER REGISTER</h1>
      <form onSubmit={handleRegisterSubmit} className='form'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary me-5">REGISTER</button>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </form>
    </div>
  )
}
export default Register