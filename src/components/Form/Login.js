// React
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Authentication
import UserContext from '../../context/UserContext';
import axios from 'axios';

// Needed Components
import Card from '../Card';
import './Form.css';

function Login (props) {

    const navigate = useNavigate();
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');

    // Authentication
    const [error, setError] = useState("");             // "error" = some error message in signup process
    const [loading, setLoading] = useState(false);      // "loading" = the process is loading correctly
    const { setUserData } = useContext(UserContext);

    const usernameChangeHandler = (event) => {
        setuserName(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    async function submitHandler (event) {
        try {
            // Prevent default form action
            event.preventDefault();
            setLoading(true);

            // Bundle new user
            const loginUser = {
                username: username,
                password: password,
                id: Math.random().toString(),
            };

            // Store token and user to 'login' database in MongoDB
            const loginRes = await axios.post('http://localhost:4000/users/login', loginUser)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            // localStorage to "establish a login session"
            // Ensures data survives page refreshs, reloads, etc.
            localStorage.setItem("auth-token", loginRes.data.token);

            // Finished loading, navigate to current directory
            setLoading(false);
            navigate('/auth-user')

            // Old stuff
            props.onLogin();
            console.log(loginUser);

            // Clear fields
            setuserName('');
            setPassword('');
        }
        catch(err){ // some error during authentication process
            setLoading(false);
            console.log("err from Login.js")
            err.response.data.msg && setError(err.response.data.msg);
        }
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
                    type="password"
                    value={password}
                    onChange={passwordChangeHandler}
                    required
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