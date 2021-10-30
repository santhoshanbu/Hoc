import React,{useState} from 'react';

const Update=(Original)=>{
    function Newcomponent( props){
        const [count,setcount]=useState(0);

        const increment=()=>{
            setcount(count+1)
        }
        return (
            <div>
                <Original count={count} increment={increment} {...props} />
            </div>
        )
    }
    return Newcomponent;
}
export default Update