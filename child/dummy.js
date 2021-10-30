import React from 'react';

const Clicks=(props)=>{
    return (
        <>
        <h2 onClick={props.increment}>hello{props.count}</h2>
        </>
    );
}

export default Clicks;