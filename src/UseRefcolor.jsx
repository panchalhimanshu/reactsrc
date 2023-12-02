import React, { useRef, useState } from 'react'

const data=[
  {title:1,subtitle:1},
  {title:2,subtitle:2},
  {title:3,subtitle:3}
]


const styl=
  {
    color:"green"
  }
  

function UseRefcolor() {

  const h1ref=useRef()
  
  const [css,setcss]=useState()
  
  function Css(){
    setcss(styl)
    h1ref.current.style.color="red"
  }

  return (
    <>
    <div ref={h1ref}>
      <button onClick={Css}>Click</button>
      
      {data.map((t)=>{
       return(
       <div key={t.title}>
        <h1> title {t.title}</h1>
        <h3 style={css}>subtitle {t.subtitle}</h3>
        </div>
       )
})}

    </div>
    </>
  )
}

export default UseRefcolor;
