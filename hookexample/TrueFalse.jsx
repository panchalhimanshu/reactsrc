import React, { useState } from 'react';

function TrueFalse() {

   var [f,t] = useState(false)
  return (
    <div>
      <button onClick={()=>{t(!f)}}> { (f)? 'True' : 'False'} </button>
    </div>
  );
}

export default TrueFalse;
