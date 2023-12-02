import React, { useEffect, useRef, useState } from 'react'


function TestModal()
{
    const [show,setShow] = useState(false);
    
       
    return(
        <>
        <button onClick={()=>{setShow(!show)}} style={{marginTop: 50}}>
            Open Modal
        </button>


        <ModalDialog isOpen={show}>
            Hello Modal
        <button onClick={()=>{setShow(true)}}>OK</button>
        </ModalDialog>
        
        </>
    )
}
 export default TestModal;


 
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


