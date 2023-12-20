import React,{useState} from 'react'
import axios from 'axios'

export default function PutAxios() {
    const[id,setId]=useState('');
    const[name,setName]=useState('');

    const handleId=(event)=>{setId(event.target.value)}
    const handleName=(event)=>{setName(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3001/user/${id}`,{name})
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occurred"+error)})
    }

  return (
    <div>
      <h1>AxiosPut</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleId} placeholder='ID'></input>
        <input type='text' value={name} onChange={handleName} placeholder='NAME'></input>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}
