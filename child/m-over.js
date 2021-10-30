import React from 'react';


const Hover=(props)=>{
    return (
        <>
        <h2 onMouseOver={props.increment}>hello {props.count}</h2>
        </>
    );
}

export default Hover;