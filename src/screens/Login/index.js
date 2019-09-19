import React from 'react';
import { GlobalContext } from 'contexts';

const Login = () => {

    const { GlobalCtx } = React.useContext(GlobalContext);
    

    return(
        <div>
            Login
        </div>
    )
}

export default Login;