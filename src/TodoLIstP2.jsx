import React, { useState } from 'react';


function TodoLIstP2({todos1,onchangetodo,ondelettodo}) {


  return (
    <div>
       <div>
        <ul >
            {todos1.map((t)=>{

                return(
                    <div key={todos1.id}>
                      <h1>{t.id}</h1>
                      <Tasks 
                      todosx={t}
                      onchange={onchangetodo}
                      ondelet={ondelettodo}
                      />
                    </div>
                )
            })}
        </ul>
    </div>
    </div>
  );
}

function Tasks({todosx,onchange ,ondelet})
{

  const [edit,setEdit] = useState(false)

  var contents;

  if(edit)
  {
    var contents =
    (
    <>
    
    <input type="text" name="" id="" 
    value={todosx.title} 
    onChange={(e)=>{
      onchange({
          ...todosx,
          title:e.target.value
      })
  }}
    />
   
    <button onClick={()=>{
      setEdit(false)
    }}>Save</button>
    </>


    )
  }

  else
  {

    var contents = (
      <>
      {todosx.title}
    <button onClick={()=>{
      setEdit(true)
    }}>Edit</button>
    </>
    )
  }

  return(
    <>
    {contents}
    <button  onClick={()=>{ondelet(todosx.id)}}>Delet</button>
    </>
  )
}

export default TodoLIstP2;
