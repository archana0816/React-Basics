import React,{useState} from 'react'
import axios from 'axios'

export default function DeleteAxios() {
    const[id,setId]=useState('');
    const handleId=(event)=>{setId(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.delete(`http://localhost:3001/user/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occurred"+error)})
    }

  return (
    <div>
      <h1>AxiosDelete</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleId} placeholder='ID'></input>
        <button type='submit'>Delete</button>
      </form>
    </div>
  )
}
