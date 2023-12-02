import React, { createContext, useContext } from 'react'
import { Property } from './UseContextHook'
import Child11 from './Child11'
import Child12 from './Child12'

export var Child5 = createContext()

function Child2() {

  let prop = useContext(Property)

  return (
    <div>
        <h3>Child 2 has now this {prop[0].money -3000} </h3>

        <Child5.Provider value={[{prop:prop[0].prop,money:prop[0].money -2000}]}>
        <Child11/>
        <Child12/>
       </Child5.Provider>

    </div>
  )
}

export default Child2
    