import React from 'react'

export default function Exception({heroName}) {

    if(heroName==='Gill'){
        throw new Error("Not a Prince");
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}
