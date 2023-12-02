import React, { useState } from 'react';


function Usestatearray() {

    const [val , upvals] = useState([1,2,3,4,5,6,7,8,9])

    
    const upprs =()=> {
        upvals([9,8,7,6,5,4,3,2,1])
    }

  return (
    <div>
      <h1>{val}</h1>
      <button onClick={upprs}>Usestate-array</button>
    </div>
  );
}

export default Usestatearray;
