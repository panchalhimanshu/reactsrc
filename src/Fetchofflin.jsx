import React from 'react';
import Freml from "./Fetchoffline.json";

function ofk()
{
  var htmx = 
      `<h1>Hello</h1>`

     Freml.map((v)=>
     {
      htmx += `<li>${v.title}</li>`

      htmx += 

     ` <img src = ${v.url} height = "200px" width = "200px" alt = "dnnd">`
     

     })
        document.querySelector(".res").innerHTML = htmx
}

// ofk()


function Fetchofflin() {
  return (
    <>
    <button onClick={ofk}>Click</button>
    <div className='res'></div>
    </>
  );
}

export default Fetchofflin;
