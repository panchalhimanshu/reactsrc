import React, { useState } from 'react';

 function ParenetMap({todo,changetosolist,delettotdolist}) {
  return (
    <div >
      <h1 > {todo.map((v,i)=>
      {
        return(
            <li key={v.id}>
                {/* {v.title} */}
                <Buttons  todos={v} onChangetodo={changetosolist} ondelettodo={delettotdolist}/>
            </li>
        )
      })} </h1>
    </div>
  );
}


function Buttons({todos ,onChangetodo ,ondelettodo}){

 const [edit,setcedit] = useState(false)
//  const [vals,upvals] = useState("")

var contextx;
 if(edit)
 {
  var contextx = (
  <>
  <input type='text' value={todos.title} onChange={(e)=>{onChangetodo({
  ...todos,
   title : e.target.value
  }
    )}} />
  <button onClick={()=>{setcedit(false)}}>Save</button>
  </>
  )
 }
 else
 {
   var contextx =
(  <>  
  {todos.title}
  <button onClick={()=>{setcedit(true)}}>Edit</button>
  </>)
 }

 return(
  <>
  {contextx}
  <button onClick={()=>{ondelettodo(todos.id)}}>Delete</button>
  </>
 )
    
}

export default ParenetMap;
