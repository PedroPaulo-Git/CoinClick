import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginSubmit = async (e) => {
    console.log("email > ",email)
    console.log("password length > ",password.length)
    console.log(e)
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      console.log('Login bem-sucedido:', response.data);
      
    } catch (error) {
      console.log("dont possible make login", error)
    }


  }
 

  return (
    <div className='form-container'>

      <h1>GAME COIN CLICKER LOGIN</h1>
      <form onSubmit={handleLoginSubmit} className='form'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary me-5">Login</button>

      </form>  <Link to="/register" className="btn btn-secondary">Register</Link>
    </div>
  )
}
export default Login;