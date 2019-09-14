import React from 'react';
// Either use a config file or env file
import { API_URL, HOME_PAGE_URL } from '@config';

const initialCtx = {
    NetworkCtx: {
        apiUrl: API_URL, token: null, homePage: HOME_PAGE_URL
    },
    setNetworkCtx: () => null
}

export const NetworkContext = React.createContext(initialCtx);

export const NetworkConsumer = NetworkContext.Consumer;

export const NetworkProvider = (props) => {

    const [NetworkCtx, setNetworkCtx] = React.useState(initialCtx.NetworkCtx);

    return (
        <NetworkContext.Provider value={{ NetworkCtx, setNetworkCtx }} >
            {props.children}
        </NetworkContext.Provider>
    )
};