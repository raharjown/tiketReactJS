import React from 'react';
import { Link } from 'react-router-dom';

function AddTiketButton() {
    return (
        <div>
            <Link to="/FormInputTiket">
                <button type="button">
                    ADD
                </button>
            </Link>
        </div>
    )
}

export default AddTiketButton;