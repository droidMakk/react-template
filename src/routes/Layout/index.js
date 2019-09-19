import React from 'react';

const Layout = (props) => {
    const { component:Component, title, ...rest } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h4>with layout</h4>
            <hr />
            <Component {...rest} />
        </div>
    )
}

export const withLayout = (Component, title) => props => {
    return <Layout title={title} {...props} component={Component} />;
}