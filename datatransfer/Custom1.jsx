import React, { useState } from 'react';
import Custom2 from './Custom2';

function Custom1() {

var [h,hh] = useState(0)

   var pr = ()=>
    {
      hh(7)
    }

   var l =  Custom2(h)
   console.log(l)

  return (
    <div>
        {l}
        {/* <Custom2 p={h}/> */}<br/>
        <button onClick={pr}>Click</button>
    </div>
  );
}

export default Custom1;
