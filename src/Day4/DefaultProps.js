import React from "react";

export default function DefaultProps(props)
{
    return(
        <div>
            <p>Default value is {props.name}</p>
        </div>
    )
}

DefaultProps.defaultProps={
    name:"SKCT"
}