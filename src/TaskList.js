import React, { useState } from 'react'

function TaskList({todos,onChangeTodo,onDeleteTodo}) {
  return (
    <div>
        <ul>
            {todos.map((t)=>{

                return(
                    <div key={t.id} className='print-array'>

                        {/* {t.title} */}
                        <Task
                        todo={t}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                        />
                       

                    </div>
                )

            })}
        </ul>
      
    </div>
  )
}


function Task({todo,onChange,onDelete})
{
    const [edit,setEdit] = useState(false);
    let content;

    if(edit)
    {
        content =
        (
            <>
                <input
                value={todo.title}
                onChange={(e)=>{
                    onChange({
                        ...todo,
                        title:e.target.value
                    })
                }}
                />
        {/* <button onClick={()=>{setEdit(false)}}>Save</button> */}
         <i class='bx bxs-save save' onClick={()=>{setEdit(false)}}></i>

            </>
        )

    }
    else 
    {
        content =
        (
        <>
          <span> {todo.title}</span>
         <i class='bx bxs-edit edit' onClick={()=>{setEdit(true)}}></i>

        </>
       )

    }

    return(
        <>
      <div className='content'>
    
            <span> {content} </span>
                   <i class='bx bxs-trash delete' onClick={()=>{onDelete(todo.id)}}></i> 
       </div>
        </>
    )
}

export default TaskList
