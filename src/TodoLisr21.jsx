import React, { useState } from 'react';

function TodoLIstP3({titles}) {

    const [inp,upinp] = useState("")

  return (
    <div> 
      
      <input type="text" name="" id="" value={inp} onChange={(e)=>{
        upinp(e.target.value)
      }}/>


      <button onClick={()=>
      {
        titles(inp)
        upinp("")
      }}>Click</button>
      
    </div>
  );
}

export default TodoLIstP3;





