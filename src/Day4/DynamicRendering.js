import React,{useState} from "react";

export default function DynamicRendering()
{
    const[x]=useState(16)
    return(
        <div>
            {
            //const changeX=()=>setX(13)
            x>10 ? <p>The number is greater than 10</p>:<p>The num is less than 10</p>
            }
        </div>
    )
    
}