import React from 'react'
import ComponentLifeCycle from './Component/Day7/ComponentLifeCycle'
import LifeCycleFunctional from './Component/Day7/LifeCycleFunctional'
import ErrorBoundary from './Component/Day7/ErrorBoundary'
import Exception from './Component/Day7/Exception'
import TryCatch from './Component/Day7/TryCatch'



export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Exception heroName="RP17"></Exception>
      </ErrorBoundary>
      <ErrorBoundary>
        <Exception heroName="Gill"></Exception>
      </ErrorBoundary> 

      <TryCatch veg="Apple"></TryCatch>

      <ComponentLifeCycle/>
      <LifeCycleFunctional/>
    </div>
  )
}
