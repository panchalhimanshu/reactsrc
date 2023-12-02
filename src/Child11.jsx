import { useContext } from 'react'

import { Child5 } from './Child2';

function Child11() {

 let xl =  useContext(Child5)


  return (
    <div>
      <h1>child 1 no 1 child {xl[0].prop} </h1>
    </div>
  );
}

export default Child11;
