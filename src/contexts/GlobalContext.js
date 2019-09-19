import React from 'react';

const initialCtx = {
    GlobalCtx: {
        appName: 'Ping Pong',
        appDomain: '',
    },
    setGlobalCtx: () => null
}

export const GlobalContext = React.createContext(initialCtx);

export const GlobalConsumer = GlobalContext.Consumer;

export const GlobalProvider = ({ children }) => {
    const [ GlobalCtx, setGlobalCtx ] = React.useState(initialCtx.GlobalCtx);

    return(
        <GlobalContext.Provider value={{ GlobalCtx, setGlobalCtx }} >
            {children}
        </GlobalContext.Provider>
    )
}