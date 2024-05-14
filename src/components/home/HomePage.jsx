import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <button type="button" class="btn btn-outline-primary"><Link to={'/login'}>Login</Link></button>
            <button type="button" class="btn btn-outline-warning"><Link style={{color:'black'}} to={'/register'}>Register</Link></button>
        </div>
    )
}
export default HomePage;