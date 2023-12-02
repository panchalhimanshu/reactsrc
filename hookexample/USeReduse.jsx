import React, { useReducer } from 'react';

function USeReduse() {

    function Re(val , action)
    {
         console.log(val)
         console.log(action)

         if(action.names == "himanshu")
         {
            return {
                ...val,
                name : "KANO1"
            }
         }
         else
         {
            return {
              ...val,
              name : "kano2"}
         }
    }

   var [mark , upmark] = useReducer(Re , ({name : "kano" , surname  : "panchal"}))

  return (
    <div>
       <h1> {mark.name} {mark.surname} </h1> <br/>
      <button onClick={()=>
    {
        upmark({names : "himanshu"})
    }}> Click</button>
    </div>
  );
}

export default USeReduse;
