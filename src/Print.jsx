import React from 'react';

function Print() {

    var arr = [];

    for(var x=0; x<10 ; x++)
    {
        arr.push(<ol type='i' style={{color : "red"}}>
		    <li>Himanshu</li>
        </ol>
         )

    }

    var div = document.getElementById("ds");







  return (
    <>
   <h1 id='hx'>{arr}</h1>
    </>
  );
}

export default Print;
