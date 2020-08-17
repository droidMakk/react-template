import React from 'react';
import { Context } from 'store';

const Login = () => {

    const { state, handlers } = React.useContext(Context);

    return (
        <div>
            Login
        </div>
    )
}

export default Login;