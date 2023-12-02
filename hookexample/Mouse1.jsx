import React, { useEffect, useState } from 'react';
import Custom from './Custom';

function Mousemove1() {
   var [move,upmove] = useState({x: 0 , y : 0})

var xl = (himanshu)=>
{
   upmove(
       {
           x : himanshu.pageX,
           y : himanshu.pageY
       }
   )

 }
 Custom("mousemove" ,xl)
   
  return (
    <div>
        <div style={{height : "30px",width : "30px" , background : "black" , marginTop : `${move.y}px` , marginLeft : `${move.x}px`,position : 'absolute' , top : "-15px" , left : "-15px" ,borderRadius : "50%" , border : "5px dotted white" }}></div>
    </div>
  );
}

export default Mousemove1;
