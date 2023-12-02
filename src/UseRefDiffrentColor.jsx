import React, { useRef, useState } from 'react';

const data=[

    {title:1,subtitle:1 },
    {title:2,subtitle:2},
    {title:3,subtitle:3}

  ]


  const arr = 
  [
    {colors : "red"  , bg : "black" , ri : "left"},
    {colors : "teal"},
    {colors : "hotpink"}

  ]
  const arrs = 
  [
    {colors : "green" , bg : "yellow",ri: "center"},
    {colors : "red"},
    {colors : "teal"}
  ]

  const arr1 = 
  [
    {colors : "blue"},
    {colors : "green"},
    {colors : "purple"}
  ]
  const arrs1 = 
  [
    {colors : "purple"},
    {colors : "blue"},
    {colors : "hotpink"}
  ]





function UseRefDiffrentColor() {

  var [color,setcolor] =  useState(arr)
  var [color1,setcolor1] =  useState(arr1)
  var bg = useRef()


 var changescolor = ()=>
  {
    setcolor(arrs)
    setcolor1(arrs1)
  }


  return (
    <div>
      
      <div >
      <button onClick={changescolor}>Click</button>
      
      {data.map((val,indexno)=>{

       return(
       <div style={{background:color[0].bg,textAlign:color[0].ri}}>
        <h1 style={{color:color[indexno].colors}}  > title {val.title}</h1>
        <h3 style={{color:color1[indexno].colors}}>subtitle {val.subtitle}</h3>
        </div>
       )
})}

    </div>




<div></div>

    </div>
  );
}

export default UseRefDiffrentColor;
