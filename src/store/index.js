import React from 'react';

import initialState from './initialState';
import * as handlers from './handlers';

export const Context = React.createContext({
    state: initialState,
    handlers
});

export function Provider(props) {
    const [state, setState] = React.useState(initialState);

    const modHandlers = {};

    Object.keys(handlers).map(
        key => (modHandlers[key] = handlers[key](state, setState))
    )

    return (
        <Context.Provider value={{ state, handlers: modHandlers }} >
            {props.children}
        </Context.Provider>
    )
}