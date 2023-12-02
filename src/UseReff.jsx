import React, { useRef, useState } from 'react';
import Ref from './Ref';

function UseReff() {



    var Reff = useRef(0)

 var cl = ()=>
 {

  // document.getElementById("x").innerHTML = ++Reff.current
  Reff.current = Reff.current+1
    console.log(Reff.current)
    // alert(Reff.current)

 }








  return (
    <div>

      <h1> {Reff.current} </h1>

      <h1 id='x'></h1>


      <button onClick={cl}>Click</button>
    </div>
  );
}

export default UseReff;
