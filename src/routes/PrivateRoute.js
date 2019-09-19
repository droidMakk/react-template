import React from 'react';
import { Redirect, Router } from '@reach/router';

import route from './route';
import { Dashboard } from 'screens';
import NotFound from './NotFound';

const PrivateRoute = () => {

    return (
        <Router>
            <Redirect from={"/"} to={route.dashboard} />
            <Redirect from={route.login} to={route.dashboard} />
            <Dashboard path={route.dashboard} />
            <NotFound default />
        </Router>
    )
}

export default PrivateRoute;