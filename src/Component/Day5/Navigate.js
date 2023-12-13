import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
    const navigate=useNavigate();
    const loginB=()=>{navigate("/login")}
    const signupB=()=>{navigate("/signup")}

  return (
    <div>
      <button onClick={loginB}>Login</button>
      <button onClick={signupB}>Signup</button>
    </div>
  )
}
