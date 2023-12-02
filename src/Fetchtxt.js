import React from 'react';

function Fetchtxt() {
  const dataFetch=()=>{
     fetch("https://jsonplaceholder.typicode.com/users").then(
      (res)=>res.json()
     ).then((data)=>
     {
      
      var html = 
      `<h1>Hello</h1>`

     data.map((v)=>
     {
      html += 
     ` <li>${v.username}</li>`

     })
        document.querySelector(".res").innerHTML = html
     })
  }
  return (
    <div>
      <button onClick={dataFetch}>
        Fetch
      </button>

      <div className='res'></div>
     
    </div>
  );
}

export default Fetchtxt;
