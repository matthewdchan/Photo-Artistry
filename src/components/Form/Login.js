// React
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 
import Card from '../Card';
import UserAccount from '../data/UserAccount';
import './Form.css';

function Login (props) {

    const navigate = useNavigate();
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setuserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            usernamename: username,
            password: password,
            id: Math.random().toString(),
        };
        props.onLogin();
        console.log(newUser);
        setuserName('');
        setPassword('');
        navigate('/auth-user');
    };


    return (
        <Card className="signin-wrapper">
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={usernameChangeHandler}
                />
                <br></br>
                <label>Password</label>
                <input
                    id="password"
                    type="text"
                    value={password}
                    onChange={passwordChangeHandler}
                />
                <br></br>
                <button type="submit">Log In</button>
                <div className='signup-link'>
                    <p>
                        Don't have an account?&nbsp;
                        <Link to='/signup'>Sign up here</Link>
                    </p>
                </div>
            </form>
        </Card>
    );  
}
export default Login;