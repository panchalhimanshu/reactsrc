import React, { useEffect, useRef, useState } from 'react'



function MyModalDialog()
{
    const [show,setShow] = useState(false);
    
       var btn = useRef()

    useEffect(()=>{
        if(!show)
        {
          btn.current.style.display = "none"
        }
    },[show])
    
       
    return(
        <>
        <button ref={btn} onClick={()=>{setShow(!show) ; btn.current.style.display = "none"} } style={{marginTop: 50}}>
        open
        </button>


        <ModalDialog isOpen={show}>
            Hello Modal
        <button onClick={()=>{setShow(!show) ;btn.current.style.display = "block"}}>OK</button>
        </ModalDialog>
        </>
    )
}
 export default MyModalDialog;


 
function ModalDialog({isOpen,children}) {

    const ref= useRef();
    console.log(isOpen)

    useEffect(()=>{

        if(isOpen)
        {
            return;
        }
        const dialog = ref.current;

        dialog.showModal();

        return()=>{
            dialog.close();
        }


    },[isOpen])



  return (
    <div>
        <dialog ref={ref}> {children}</dialog>
    </div>
  )
}


