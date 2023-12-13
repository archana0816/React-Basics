import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import SignUp from './Component/Day5/SignUp'
import Login from './Component/Day5/Login'
import Navigate from './Component/Day5/Navigate'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/login">Login page</Link>
        </li>
        <li>
          <Link to="/signup">SignUp page</Link>
        </li>
      </ul> */}
      <Navigate/>
      <Routes>
        <Route path="/login" element= <Login/> ></Route>
        <Route path="/signup" element= <SignUp/> ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
