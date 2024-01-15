import './navbar.css'
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar(){
    const navigate = useNavigate()
    

    const Jumptologin = () => {
        localStorage.setItem('userId', 0);
        navigate('/Login');
    };

    return(
        <nav className="nav">
            <input type="text" placeholder="Find Shoe"/>
            <button>Find Shoe</button>
            <button onClick={Jumptologin}>Log out</button>
            <div>{localStorage.getItem('userId')}</div>
        </nav>
    )
}