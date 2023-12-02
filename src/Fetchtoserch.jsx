import React, { useState } from 'react';
import Freml from "./Serch.json";


function Fetchtoserch() {

  const [input, setinput] = useState('');

//   var htmx = 
//   `<h1>Hello</h1>`

//   Freml.filter((item) => (
//   item.title.toLowerCase().includes(input.toLowerCase()))
//  ).map((item) => (
//     htmx += `${item.title}`

//  ))
//  document.querySelector(".res").innerHTML = htmx




  return (
    <div>
         <input
        type="text"
        placeholder="Search........."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />

    <div className='res'></div>
      
    {Freml.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
      ).map((val, index) => (
          <div key={index}>{val.name}</div>
        ))}

    </div>
  );
  }
export default Fetchtoserch;
