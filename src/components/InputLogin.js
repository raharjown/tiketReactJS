import React from 'react';

function InputLogin() {
    return (
        <div>
            <p>
                <label>Username:</label>
                <input type="text" name="username" placeholder="username..." />
            </p>
            <p>
                <label>Password:</label>
                <input type="password" name="password" placeholder="password..." />
            </p>
        </div>
    )
}

export default InputLogin;