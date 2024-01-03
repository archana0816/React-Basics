import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function useEffectcount()
{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`You clicked ${count} times`;
    })

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                CLICK ME
            </button>
        </div>
    )
}