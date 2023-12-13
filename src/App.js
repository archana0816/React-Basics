import React from 'react'
import PropsFunctional from './Day4/PropsFunctional'
import PropsClass from './Day4/PropsClass'
import PropsMethod2 from './Day4/PropsMethod2'
import PropsArrow from './Day4/PropsArrow'
import StateClassCom from './Day4/StateClassCom'
import StateFunction from './Day4/StateFunction'
import StateHoldObject from './Day4/StateHoldObject'
import Parent from './Day4/ParentChildComponent'
import TwoWayBinding from './Day4/TwoWayBinding'
import DefaultProps from './Day4/DefaultProps'
import DynamicRendering from './Day4/DynamicRendering'

export default function App() {
  return (
    <div>
      <PropsFunctional name="Archana" sec="A"></PropsFunctional>
      <PropsClass college="SKCT"></PropsClass>
      <PropsMethod2 college="SKCT" place="CBE"></PropsMethod2>
      <PropsArrow name="Archana"></PropsArrow>
       <StateClassCom/>
       <StateFunction/>
       <StateHoldObject/>
       <Parent/>
       <TwoWayBinding/>
       <DefaultProps/>
       <DynamicRendering/>
    </div>
  )
}
