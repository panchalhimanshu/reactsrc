import { useContext } from 'react'
import { Property } from './UseContextHook'




function Child1() {

 const p =  useContext(Property)

  return (
    <div>
        <h3>Child 1 had now {p[0].prop} {p[0].money -2000}</h3>
    </div>
  )
}

export default Child1
