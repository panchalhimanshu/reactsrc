import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

function FunctionAlert() {
 
   
//    function Fa()
//     {
//        alert("Function-Alert....!")
//     }

//    const Fa =  function km()
//     {
//         alert("Function-Alert....!")
//     }

    // const Fa = ()=>
    // {
    //     alert("Function-Alert....!")

    // }
  

 


    // {Comment}
    // {
    // Fa()
    // {
    //     alert("Function-Alert....!")
    // }
    // Dirct Function Name naa likhi sakhay
    // }
     // {Comment/}



    
     click = function hm()
     {
        var functionalertsss = document.getElementById("functionalert")
        var km = document.querySelector(".lm")
        alert("ALERT...!");
     
        if(km.style.color == "blue")
         {
         km.innerHTML = "KANO"
         km.style.color = "cyan"
         functionalertsss.innerHTML = "KANO"
         km.style.background = "Blue"
         }
         
         else
         {
         km.style.color = "blue"
         km.style.background = "hotpink"
         km.innerHTML = "Himanshu"
         functionalertsss.innerHTML = "Function-Alert"
         }
     }
 

 



  


        return(
            <>
            <button onClick={click} className='abc' id='functionalert' >Function-Alert</button>
            </>
        )
}

export default FunctionAlert;
