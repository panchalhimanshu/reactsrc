import React, { useEffect,useState,useRef } from 'react'


function Useeffect() {

    const [xmove,ymove] = useState({x:0,y:0})

        const mouuseleave = useRef();


    useEffect(()=>
    {
        var move = (changepos)=>
        {
            ymove(
                {
                    x:changepos.pageX,
                    y:changepos.pageY
                }
            )
            mouuseleave.current.style.display = "block"



            setTimeout(function mouusestop()
            {
              mouuseleave.current.style.display = "none"
            },1000)
        }

        function nones()
        {
          mouuseleave.current.style.display = "none"
        }


         window.addEventListener("mousemove",move)
         window.addEventListener("mouseout",nones)

    })

  return (
    <div ref={mouuseleave} style={{height:25,width:"25px",background:"red" ,borderRadius:"50%",
    // transform:`translate(${xmove.x}px , ${xmove.y}px )`
    marginTop : ` ${xmove.y}px`,
    marginLeft : ` ${xmove.x}px`
      ,position :"absolute", top: -12 ,left: -12}
    }
      >
    </div>
  );
}

export default Useeffect;
