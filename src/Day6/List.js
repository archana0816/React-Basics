import React from 'react'

export default function List() {
    const animal=["dog","cat","jagasri","archana","abinaya"]
    const result=animal.map((ani)=><li>{ani}</li>)
  return (
    <div>
      <ol>
        {result}
      </ol>
    </div>
  )
}
