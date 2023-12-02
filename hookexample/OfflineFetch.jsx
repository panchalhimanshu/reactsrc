import React, { useState } from 'react';
import intialTodos from './FetchFile.json'

// const intialTodos = 
// [
//     {name:"Leanne Graham"},
//     {name:"Ervin Howell"},
//     {name:"Clementine Bauch"},
//     {name:"Patricia Lebsack"},
//     {name:"Chelsey Dietrich"},
//     {name:"Mrs. Dennis Schulist"},
//     {name:"Kurtis Weissnat"},
//     {name:"Nicholas Runolfsdottir V"},
//     {name:"Glenna Reichert"},
//     {name:"Clementina DuBuque"}
// ];


function OfflineFetch() {

  const [input, setinput] = useState('');

    // var Content ="<h1>Offline-fetch</h1>" ;

    // intialTodos.filter((item)=>(
    //   item.name.toLowerCase().includes(input.toLowerCase()))
    //   ).map((val, index) => (
    //       Content += `<div>${val.name}</div>`
    //   ))

    //  document.getElementById("res").innerHTML = Content

  return (
    <div>

      <input
      type="text"
      placeholder="Search........."
      value={input}
      onChange={(e) => setinput(e.target.value)}
      />

     {intialTodos.filter((item)=>(
      item.name.toLowerCase().includes(input.toLowerCase()))
      ).map((val, index) => (
          <li key={index}>{val.name}</li>
      ))}


      <div id='res'>
      </div>
    </div>
  );
}

export default OfflineFetch;
