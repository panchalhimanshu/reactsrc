import { useContext } from 'react'

import { Child5 } from './Child2';

function Child12() {

 let xl2 =  useContext(Child5)

  return (
    <div>
      <h1>child 1 no 2 child  {xl2[0].money} </h1>
    </div>
  );
}

export default Child12;
