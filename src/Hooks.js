import React, { useState } from 'react';
import testImg from "./imges/testImg.webp";
import virat from "./imges/virat.jpg"

function Hooks() {
  const [marks ,setmarks] = useState(20)

    // const [marks ,setmarks] = useState(<img src= {testImg} alt='imgs' height={100} width={100}/>)

    const Color = 
    {
      padding : "10px",
      backgroundColor : "Yellow",
      fontSize : "25px",
      fontWeight : "bold"
    }
  return (
    <>
      <h1> {marks} </h1>
      <button style={Color} onClick={
        ()=>
        {
            // setmarks(<img src= {virat} alt='imgs' height={100} width={100}/>)
            setmarks(100)
            // setmarks(marks+1)

        }
      }> Update Marks</button><br/>
    </>
  );
}

export default Hooks;
