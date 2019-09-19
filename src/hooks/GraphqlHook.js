import React from 'react';
import { NetworkContext } from 'contexts/NetworkContext';

export const useGraphqlRequest = (query, values, mapper) => {
    const { NetworkCtx: { graphqlUrl } } = React.useContext(NetworkContext);
}