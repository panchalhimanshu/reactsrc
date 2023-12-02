import React, { useEffect, useRef } from 'react';

function Triggerscroll() {

    var arr = [];

    for(var i=0 ; i<50 ;i++)
    {
        arr.push(<li>item {i+1}</li>)
    }

  return (
    <div>
        {arr}
    </div>
  );
}


export default Triggerscroll;

export function Boxmodel()
{
   var Boxref = useRef()

   useEffect(()=>
   {
    // console.log(Boxref.current)
    var Boxmodel = Boxref.current

    var Box = new IntersectionObserver((enteries)=>
    {

        // console.log(enteries[0])
        var enter = enteries[0];
        // console.log(enter)

        if(enter.isIntersecting)
        {
            document.body.style.background = "black";
            document.body.style.color = "white";
        }
        else
        {
            document.body.style.background = "red";
            document.body.style.color = "white";
        }
    }
    // ,{
        // threshold : 1
    // }
    )

    Box.observe(Boxmodel)

   })

    return(
        <>
        
        <div ref={Boxref} style={{height : "150px",width: "150px" ,background: "red",marginLeft: "15px"}}>

        </div>
        </>
    )
}