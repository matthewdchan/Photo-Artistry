import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import UserAccount from '../models/UserAccount';
import './Form.css';

function Signup(props) {

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
        props.onSignup();
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
                    required
                />
                <br></br>
                <label>Password</label>
                <input
                    id="password"
                    type="text"
                    value={password}
                    onChange={passwordChangeHandler}
                    required
                />
                <br></br>
                <button type="submit">Create Account</button>
            </form>
        </Card>
    );  
}
export default Signup;