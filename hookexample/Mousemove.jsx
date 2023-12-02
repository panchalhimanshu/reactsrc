import React, { useEffect, useRef, useState } from 'react';

function Mousemove() {
   var [move,upmove] = useState({x: 0 , y : 0})

 var divRef = useRef()

 useEffect(()=>
 {
  var up = (himanshu)=>
 {
    upmove(
        {
            x : himanshu.pageX,
            y : himanshu.pageY
        }
    )
    divRef.current.style.display = "block"
    divRef.current.style.transform = "scale(0.6)"



    setTimeout(function mouusestop()
    {
      divRef.current.style.display = "none"
    },2000)
    
 }

 var downx = () =>
 {
  divRef.current.style.display = "none"
 }

 window.addEventListener("mousemove" ,up)

 window.addEventListener("mouseout" ,downx)
 })



   
   
  return (
    <div>
        <div ref={divRef} style={{height : "35px",width : "35px" , background : "black" , marginTop : `${move.y}px` , marginLeft : `${move.x}px`,position : 'absolute' , top : "-15px" , left : "-15px" ,borderRadius : "50%" , border : "5px dotted white" }}></div>
    </div>
  );
}

export default Mousemove;
