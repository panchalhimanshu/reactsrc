import React, { useEffect, useState } from 'react';

function UsestateColor() {


    const Contects = 
    [
        {title:"Hello" , age : "20"},
        {title:"Hellx1" , age : "21"},
        {title:"Hellx" , age : "22"}
    ]


    const  Color = 
    {
        color : "red"
    }
    
    var setColors = 
    {
        color : "Blue"
    }

    const [color,setcolor] = useState(Color)


    var Changecolors = ()=>
    {
        setcolor(setColors)
    }
      


        


// useEffect(()=>
// {
//     var Changecolors = ()=>
// {
//     setcolor(setColors)
//      }
     
//     var x = document.getElementById("x")
//     x.addEventListener("click" , Changecolors)
// })



  return (
    <div>
      <h1 style={color}>Himanshu</h1>
      <button onClick={Changecolors}>Change-Color</button>

      {/* <button id='x'>Change-Color</button>  */}




      {Contects.map((v,i)=>
      {
        return(
            <div style={color}>
                <h1> {v.title}  </h1>
                <b> {v.age} </b>
             </div>
        )
      })}


  
      


    </div>
  );
}

export default UsestateColor;
