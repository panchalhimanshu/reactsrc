import React, { useRef } from 'react'

const data = [
    
    {
        title:"Title 1",
        subtitle:"Subtitle 1"
    },
    {
        title:"Title 2",
        subtitle:"Subtitle 2"
    },
    {
        title:"Title 3",
        subtitle:"Subtitle 3"
    }
]

function UseRef() {

    const h1Ref = useRef();
    const divRef = useRef();
    const getTag = ()=>{

    console.log(h1Ref)
    console.log(h1Ref.current)

    console.log(divRef)
    console.log(divRef.current)
    
    h1Ref.current.style.color ="orange"
    h1Ref.current.style.fontSize ="50px"
    h1Ref.current.style.textAlign = "center"
    h1Ref.current.style.backgroundColor ="purple"
    divRef.current.style.backgroundColor ="green"
    divRef.current.style.color ="white"
    divRef.current.style.textAlign = "center"
   }

  return (
    <div>
        <h1 ref={h1Ref} onClick={getTag}>Heading 1</h1> 

        <div className='card' ref={divRef} onClick={getTag}>

           

            {data.map((v)=>{
                return(
                <div ref={divRef}>
                    <h2>{v.title}</h2>
                    <p>{v.subtitle}</p>
                </div>
                )
            })}

            {/* <div>
                <h2>Title 2</h2>
                <p>Subtitle 3</p>
            </div>

            <div>
                <h2>Title 3</h2>
                <p>Subtitle 3</p>
            </div> */}


        </div>     
    </div>
  )
}

export default UseRef

