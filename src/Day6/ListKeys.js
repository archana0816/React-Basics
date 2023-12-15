import React from 'react'

export default function ListKeys() {
    const animal=["dog","cat","jagasri","archana","abinaya"]
    const result=animal.map((ani,index)=><li key={index}>{index} {ani}</li>)
  return (
    <div style={{color:"gold"}}>
      <ul type="none">
        {result}
      </ul>
    </div>
  )
}
