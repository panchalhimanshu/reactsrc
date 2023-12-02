import React, { useState } from 'react';

function Child1(pop) {

    const [inp,upinp] = useState("")
    const [inp1,upinp1] = useState("")


    var submitfun = (e)=>
    {
        e.preventDefault();
         pop.onClick(inp)
        upinp("")
    }

  return (
    <div>

    <input type='text' value={inp} onChange={(e)=>
    { upinp(e.target.value) }} />


    <button onClick={submitfun}>Click</button>
    {/* <button onClick={pop(inp)}>Click</button> */}

    {inp}
    {/* {inp1} */}


    </div>
  );
}

export default Child1;
