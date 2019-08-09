import React from 'react';
import './input.scss';

export const Input = props => {

    let { className } = props;

    return <input {...props} className={`input ${className}`}  />
}

export default Input;