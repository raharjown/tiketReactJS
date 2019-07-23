import React from 'react';
import InputLogin from './InputLogin';
import SubmitLogin from './SubmitLogin';


class FormLogin extends React.Component {
    render() {
        return (
            <div>
                <form className="fieldset">
                    <fieldset >
                        <legend>Login</legend>
                        <InputLogin />
                        <SubmitLogin />
                    </fieldset>
                </form>
            </div>

        )
    }
}

export default FormLogin;