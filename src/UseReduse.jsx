import React, { useReducer } from 'react';

function UseReduse() {


   function reduser(state,action)
   {
         if( action.vals == 0)
         {
            return {count:state.count+1}
         }
         else
         {
            return {count:state.count-1}
         }
   }
 let [val,upval] = useReducer(reduser,{count:0})





  return (
    <div>
      
{val.count}

<button 
onClick={()=>
{
    upval({vals : 0})
}}>
    inc
    </button>

    <button 
onClick={()=>
{
    upval({vals : 1})
}}>
dec    </button>

    </div>
  );
}

export default UseReduse;
