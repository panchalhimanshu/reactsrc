import React, { useState } from 'react';

function Mousemove() {

    const [xmove,ymove] = useState({x:0,y:0})


    var move = (changepos)=>
    {
        ymove(
            {
                x:changepos.pageX,
                y:changepos.pageY
            }
        )
    }

     window.addEventListener("mousemove",move)





  return (

    <div style={{height:40,width:"40px",background:"yellow" ,borderRadius:"50%",
    // transform:`translate(${xmove.x}px , ${xmove.y}px )`
    marginTop : ` ${xmove.y}px`,
    marginLeft : ` ${xmove.x}px`
      ,position :"absolute", top: -20 ,left: -20
    }
      }>
    </div>
  );
}

export default Mousemove;

