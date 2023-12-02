import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';

function Datatransfer(l) {


    var [val,upval] = useState({background : "purple"})

    var [color , upcolor ] = useState("green")

    // console.log(l)
  
        let kanos = ()=>
        {

            if(l.background == color)
            {
                upval({background : "red"})
                upcolor("gray")
            }
            else
            {
                upval({background : "purple"})
                upcolor("green")

            }

        }
       


  return (
    <div>
        <div style={{background:val.background}}>Himanshu</div>
        <button onClick={kanos}>Click</button>
    </div>
  );
}

export default Datatransfer;
