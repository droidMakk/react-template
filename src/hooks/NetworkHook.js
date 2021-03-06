import React from 'react';
import { NetworkContext } from 'contexts/NetworkContext';

// HOOK which sends the network request
export const useNetworkRequest = (url: string, body: string | object | null = null, mapper: ({ }) => Promise<{}> = null) => {
    const initialStatus = { status: null, statusText: '' };
    const { NetworkCtx: { apiUrl } } = React.useContext(NetworkContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});
    const [mapped, setMapped] = React.useState({});
    const [status, setStatus] = React.useState(initialStatus)

    // PARSE FOR NETWORK REQUEST
    const method = data ? 'POST' : 'GET';
    url = `${apiUrl}${url}`
    body = typeof body === "string" ? body : JSON.stringify(body);

    const resetState = () => {
        setMapped({});
        setLoading(true);
        setError(false);
        setData({});
        setMapped({});
        setStatus(initialStatus);
    }

    const makeNetworkRequest = () => {
        resetState();
        fetch(url, { method, body })
            .then(res => {
                setStatus({ status: res.status, statusText: res.statusText })
                return res.json();
            })
            .then(resdata => {
                setData(resdata);
                setLoading(false);
                if (mapper) {
                    mapper(resdata)
                        .then(mappeddata => setMapped(mappeddata))
                        .catch(err => setError(true));
                }
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
    }

    return { loading, error, status, data, mapped, refetch: makeNetworkRequest }
}