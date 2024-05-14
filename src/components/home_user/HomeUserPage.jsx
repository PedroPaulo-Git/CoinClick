import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeUserPage = () => {
    const [email, setEmail] = useState('');
    const { id } = useParams();

    useEffect(() => {

        const fetchUserData = async () => {

            try {
                if (!id) return;
                const response = await axios.get(`http://localhost:5000/register/${id}`);
                console.log('Response:', response);
                console.log('User ID:',response.data.id);
                console.log("email >",response.data.email);
                setEmail(response.data.email);
            } 
          
            catch (error) {
                console.log(error)
            }
            
        };
        
        if (id) {
            fetchUserData();
            console.log(id)
        }
    
    }, [id]);
    console.log('email >>>>> ',email)
    return (
        <div>HomeUserPage
            <p>{email? id:''}</p>
            <p>{email}</p>
        </div>
    )
}
export default HomeUserPage;