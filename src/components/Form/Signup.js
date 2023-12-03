import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
//import UserAccount from '../../../models/UserAccount';
import './Form.css';

function Signup(props) {

    const navigate = useNavigate();
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const usernameChangeHandler = (event) => {
        setuserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // package
        const newUser = {
            usernamename: username,
            password: password,
            email: email,
            id: Math.random().toString(),
        };

        props.onSignup();
        console.log(newUser);

        // clear fields 
        setuserName('');
        setPassword('');
        setEmail('');

        navigate('/auth-user');
    };


    return (
        <Card className="signin-wrapper">
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={emailChangeHandler}
                    required
                />
                <br></br>
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