import React from 'react';

const Error = ({ message, onRetry}) => (
    <div>
        <p>{message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
);

export default Error;