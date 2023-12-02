import React, { useEffect, useState } from 'react';


function UsestateColorchange() {

    var [val,upval] = useState({background : "yellow"})

    var [color , upcolor ] = useState(false)

        let kanos = ()=>
        {
            if(color == true)
            {
                upval({background : "green"})
                upcolor(false)
            }
            else
            {
                upval({background : "purple"})
                upcolor(true)
            }


        }
  return (
    <div>
        <div style={{background:val.background}}>Himanshu</div>
        <button onClick={kanos}>Click</button>
    </div>
  );
}

export default UsestateColorchange;
