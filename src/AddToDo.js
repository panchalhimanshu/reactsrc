import React, { useState } from 'react'

function AddToDo({onaddTodo}) {

  const [title,setTitle] = useState("");
  


  return (
    <>
    <div className='Form'>
<div className='title-btn'>
    {/* {title} */}
      <input
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      />
      <button onClick={()=>{
        onaddTodo(title)
      }}>Add</button>


</div>
      
    </div>
    </>
  )
}

export default AddToDo


