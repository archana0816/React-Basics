import React from 'react'


function Display(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default function ListProps() {
    const animal=["dog","cat","cow","monkey"]
    const displayani=animal.map((ani) => <Display name= {ani}></Display>)
  return (
    <div>
        <ul>
      {displayani}
      </ul>
    </div>
  )
}
