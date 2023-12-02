import React, { useState } from 'react';


function Usestatemultipleobject() {

    const [mark ,updatemark] = useState(
      {
        name : "himanshu",
        age : "18",
        add : {
          home : "CG",
          Office : {
            office1 : "SG1",
            office2 : "SG2"
          }
        }
      }
    )



    var changessvalue = ()=>{
        updatemark(
          {
           ...mark ,
          add : {
            ...mark.add ,
            Office : {
              ...mark.add.Office,
              office2 : "SGGGG"
            }
          }
          }
        )
    }

 


  return (
    <>

    <h1>{mark.add.Office.office2}</h1>
    <button onClick={changessvalue}>Usestate-Object-Click</button>
    </>
  );
}

export default Usestatemultipleobject;
