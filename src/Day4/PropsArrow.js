import React from "react"; 
const PropsArrow=(props)=>
{
    const myname=props.name;
    return(
        <div>
            <h2>HELLO {myname}</h2>
        </div>
    )
}

export default PropsArrow;