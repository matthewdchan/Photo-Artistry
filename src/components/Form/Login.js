import React from 'react';
import { useState } from 'react';

import Card from '../Card';
import UserAccount from '../data/UserAccount';
import './Form.css';

function Login (props) {

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
        props.onIsLoggedIn();
        console.log(newUser);
        setuserName('');
        setPassword('');
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
            </form>
        </Card>
    );  
}
export default Login;