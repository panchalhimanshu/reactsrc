import React, { useContext } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { Property } from './UseContextHook'

function ParentCompo() {

 let parent =  useContext(Property)

  return (
    <div>
        <h3>Parent Compo {parent[0].money}</h3>
        <Child1/>
        <Child2/>
    </div>
  )
}

export default ParentCompo

