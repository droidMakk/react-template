import React from 'react';
import { Router, navigate, Location } from '@reach/router';

import Login from 'screens/Login';
import route from './route';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';

const RouteApp = props => {

    const [auth, setAuth] = React.useState(false);

    if (!auth) navigate(route.login);
    if (auth && window.location.pathname === route.login) {
        navigate(route.dashboard);
    }

    return (
        <Router>
            <Login path={route.login} />
            <PrivateRoute path={"/*"} />
            <NotFound default />
        </Router>
    )
}

export default RouteApp;
