import React from 'react'

export default function ListObject() {

    const player=[{id:1, name:"dhoni", no:7},
                   {id:2, name:"gill", no:77},
                    {id:3, name:"pant",no:17}]
    const display=player.map((play)=><li key={play.id}> {play.id} {play.name} {play.no}</li>)
  return (
    <div>
        <ul type="none">
      <p>Player Details</p>
      {display}
      </ul>
    </div>
  )
}
