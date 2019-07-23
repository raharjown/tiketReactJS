import React from 'react';
import { Link } from 'react-router-dom';

function SubmitLogin() {
    return (
        <div>
            <Link to="/ListTiket">
                <button type="button">
                    Login
                </button>
            </Link>
        </div>
    )
}

export default SubmitLogin;