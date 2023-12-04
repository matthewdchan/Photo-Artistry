// React
import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import axios from 'axios';

// Needed Components
import Card from '../Card';
import './Form.css';

function Signup(props) {

    const navigate = useNavigate();
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    async function submitHandler(event) {
        // Prevent default form action
        event.preventDefault();
        setLoading(true);

        try {
            // Package content
            const newUser = {
                username: username,
                password: password,
                email: email,
            };
    
            props.onSignup();
            console.log(newUser);
    
            // Save user info to 'signup' database in MongoDB
            await axios.post('http://localhost:4000/users/signup', newUser);

            // Store token and user to 'login' database in MongoDB
            const loginRes = await axios.post('http://localhost:4000/users/login', {
                username,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            })

            // localStorage to "establish a login session"
            // Ensures data survives page refreshs, reloads, etc.
            localStorage.setItem("auth-token", loginRes.data.token);

            // Finished loading, navigate to current directory
            setLoading(false);
            navigate('/')

            // Clear form fields 
            setuserName('');
            setPassword('');
            setEmail('');
        }
        catch(err){ // some error during authentication process
            setLoading(false);
            err.response.data.msg && setError(err.response.data.msg);
        }
    

        navigate('/auth-user');
    };


    return (
        <Card className="signin-wrapper">
            <form onSubmit={submitHandler}>
                <label>Email</label>
                <input
                    id="email"
                    type="email"
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
                    type="password"
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