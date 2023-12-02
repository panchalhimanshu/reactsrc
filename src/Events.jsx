import React from 'react';

function Events() {


    var my = (event)=> {
        document.getElementById("demo").innerHTML = event.type ;
        console.log(event.type)
      }

  return (
    <div>
      <b onMouseEnter={my} style={{color:"red" , padding : "10px 5px" ,background:"yellow"}}>mouseenter-event-name</b><br/>
      <button onClick={my} style={{marginTop:"15px"}}>click</button>
      <h1 id='demo'></h1>
    </div>
  );
}

export default Events;
