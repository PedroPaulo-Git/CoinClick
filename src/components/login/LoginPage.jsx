import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginisValid, setLoginisValid] = useState(false)
  const [showResultLogin, setShowResultLogin] = useState('');


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      console.log(response);
      setLoginisValid(response.data)
      setShowResultLogin(response.data)
      setTimeout(() => {
        setShowResultLogin('');
      }, 1000);
    } catch (error) {
      console.log("dont possible make login", error)
    }
  }
  useEffect(()=>{
    if (loginisValid === true) {
      setShowResultLogin('login sucessful')
      setTimeout(() => {
        window.location.href = '/game';
        setShowResultLogin('');
      }, 3000);
    } else {
      setTimeout(() => {
        setShowResultLogin('');
      }, 3000);
    }
    return
  },[loginisValid])
  return (
    <div className='form-container'>
      {showResultLogin && <p style={{ color: 'red' }}>{showResultLogin}</p>}
      <h1>GAME COIN CLICKER LOGIN</h1>
      <form onSubmit={handleLoginSubmit} className='form'>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >Check me out</label>
        </div>
        <button onClick={handleLoginSubmit} type="submit" className="btn btn-primary me-5">Login</button>
        <Link to="/register" className="btn btn-secondary">Register</Link>
      </form>
    </div>
  )
}
export default Login;