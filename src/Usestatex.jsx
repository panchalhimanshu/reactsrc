import React, { useState } from 'react';


function Usestatex() {

    const [mark ,updatemark] = useState(
        {"name" : "himanshu",
        "city" : "ahm"}
        )

    var changessvalue = ()=> {
        updatemark(
        {"name" : "bunty",
            "city" : "vadodra"}
            )
        }

  return (
    <div>
      <b>{mark.name} {mark.city}</b>

    
      <button onClick={changessvalue}> Click</button><br/>
    </div>
  );
}

export default Usestatex;
