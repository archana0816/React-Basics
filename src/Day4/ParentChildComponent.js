import React from "react";

export default function Parent()
{
    return(
        <div>
            <h1>I'm from Parent</h1>
            <Child num={100}/>
        </div>
    )
}

function Child(props)
{
    return(
        <div>
            <h1>I'm from Child</h1>
            <p>The number is {props.num}</p>
        </div>
    )
}