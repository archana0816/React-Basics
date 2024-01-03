import React from 'react'
import { Provider } from 'react-redux'
import store from './Component/Thunk/store'
import CounterComponent from './Component/Thunk/CounterComponent'



export default function App() {
  return (
    <Provider store={store}>
      <CounterComponent/>
    </Provider>
  )
}
