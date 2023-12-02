import React, { useState } from 'react';

function Usestateinput() {

    const [val,updatebval] = useState("")

    const changesvalu = (valx)=>
    {
        updatebval(valx.target.value)
    }

  return (
    <div>

      {/* <input type='text'  onKeyUp={changesvalu}/><br/> */}
      
      <input type='text'  onChange={changesvalu}/><br/>
      <b> {val} </b><br/>


      <button>Click input value change</button>
    </div>
  );
}

export default Usestateinput;
