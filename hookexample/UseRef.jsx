import React, { useRef, useState } from 'react';

const data =[
      {
        titlex: "Title 1",
        subtitle: "Subtitle 1",
      },

      {
        titlex: "Title 2",
        subtitle: "Subtitle 2",
      },
      {
        titlex: "Title 3",
        subtitle: "Subtitle 3",
      },
]

var color = [
    {colors : "red"},
    {colors : "orange"},
    {colors : "blue"}
]
var colorx = [
    {colors : "purple"},
    {colors : "red"},
    {colors : "gray"}
]

function UseRef() {

   var [c,upc] = useState(color)
   var titleref = useRef()
  

  return (
    <div>
      <button onClick={()=>{upc(colorx)}}>chnagecolor</button>
      
      <main>
      {data.map((v, index) => (
        <div key={v.titlex} >
          <h2 style={{color : c[index].colors}}>{v.titlex}</h2>
          <p>{v.subtitle}</p>
        </div>
      ))}
    </main>

    </div>
  );
}

export default UseRef;
