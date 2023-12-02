import React, { useState } from 'react';

function Useestate() {


    const [mark ,updatemark] = useState(1)
    // const [mark ,updatemark] = useState("hello")
    // const [mark ,updatemark] = useState({"hello" : "himanshu"})
    // const [mark ,updatemark] = useState([{"hello" : "himanshu"}])
    // const [mark ,updatemark] = useState(true)




  var changessvalue = ()=>{

    updatemark(2)
    // updatemark(211212137895)
    // updatemark("hello2")
    // updatemark({"hello" : "Bunty"})
    // updatemark([{"hello" : "Bunty"}])
    // updatemark(false)

    }
     

    

    const vals = {
      color : "red"
    }

  return (
    <>

 
 <h1 style={vals}>{mark}</h1>
      {/* <h1>{mark.hello}</h1> */}
      {/* <h1>{mark[0].hello}</h1> */}
      <button onClick={changessvalue}> Click</button><br/>

    {/* <h1> { (mark) ? "T" : "F"} </h1> */}
    
    </>
  );
}

export default Useestate;


