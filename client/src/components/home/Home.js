import React,{useState} from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    const Jumptosignup = () => {
    
        navigate('/Signup');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        
    };

    return (
        <div className='home-theme' >
            <div className='register-box'>
                <h1>Welcome to Minh-shop</h1>
                <input className='home-input' 
                    type='email' 
                    placeholder='Email'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                <input className='home-input' 
                    type='password' 
                    placeholder='Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button className='home-button' onClick={handleLogin}>Log in</button>
                <div className='jumptosignup'>
                    <h2>Dont have account?</h2>
                    <button onClick={Jumptosignup} className='jumptosignup-button'>Sign up</button>
                </div>

                
            </div>
        </div>
    );
}
