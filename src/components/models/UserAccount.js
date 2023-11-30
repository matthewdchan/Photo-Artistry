import React from "react";

function UserAccount() {
    const user = [
        {
            username: 'John',
            password: '1234',
            id: Math.random().toString()
        },

        {
            username: 'Jane',
            password: '1234',
            id: Math.random().toString()
        },
];

return (
    <div>
        <h1>Account</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
    </div>
    );

}

export default UserAccount;

