import React, { useRef } from 'react';

function InputFocus() {

   var inp = useRef();

   function Btnn()
   {
    inp.current.focus()
    console.log(inp)
   }

  return (
    <div>
      <input type="text" name="" id="" ref={inp}/>
      <button onClick={Btnn}>Focus</button>
    </div>
  );
}

export default InputFocus;
