import React, { useState } from 'react';

function Updateinputtoobject() {

    const [vals,upvals] = useState(
        {
            name : "Himanshu",
            age : "12"
        }
    )

    var upp = (h)=>{
                
        upvals(
        {
            ...vals,
            // name :   h.target.value
            name : vals.name +  h.target.value
        })
    }



  return (
    <div>
        <h1>{vals.name}{vals.age}</h1>
        <input type="text" onChange={upp}  />
    </div>
  );
}

export default Updateinputtoobject;
