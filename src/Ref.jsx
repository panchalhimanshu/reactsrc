import React, { useRef } from 'react';


const data = [
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
  ];

function Ref() {

   var colors = [
        {color : "green"},
        {color : "blue"},
        {color : "orange"}
    ]

    var colores = [
        {color : "blue"},
        {color : "red"},
        {color : "purple"}
    ]


   var h2Ref = useRef(colors)
   var h3Ref = useRef()
   var xl = useRef(colores)


   console.log(h2Ref.current)

   function changes()
   {
    h2Ref.current = xl.current
    console.log(h2Ref.current)
   }
   



  return (
    <div>

        {data.map((val,inx)=>
        {
          return(

            <div >
            <h2 ref={h2Ref} style={{color : h2Ref.current[inx].color}}>{val.titlex}</h2>
            <h3> {val.subtitle}</h3>
            </div >

          )
        })}

        <button onClick={changes}>CLICK</button>
      
    </div>
  );
}

export default Ref;
