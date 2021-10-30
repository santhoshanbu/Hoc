import React from 'react';

const Click=(props)=>{
    return (
        <>
        <h2 onClick={props.increment}>hello{props.count}</h2>
        </>
    );
}

export default Click;