import React, { useState } from 'react';
import TodoLIstP2 from './TodoLIstP2';
import TodoLIstP3 from './TodoLisr21';

function TodoLIstP1() {


var nextID =4;
    const intialTodos = 
    [
        {id:1,title:"Apple"},
        {id:2,title:"Banana"},
        {id:3,title:"Mango"}
    ];
    const [todos,setTodos] = useState(intialTodos) ;

    var handleAddTodo = (titlelm)=>{
        setTodos([
            ...todos,
            {
                id:nextID++,
                title:titlelm
            }
        ])
    }

    var handleEditTodo = (nextTodo)=>{
      setTodos(
        todos.map((v)=>
        {
          if(v.id ==  nextTodo.id ) 
          {
            return nextTodo;
          }
          else
          {
            return v;
          }
        })
      )
    }
 

    const handleDeleteTodo = (todoId)=>{

      return setTodos(
           todos.filter((t)=>{
               return t.id != todoId
           })
       )
   }


  return (
    <div>
      <TodoLIstP3 titles={handleAddTodo}/>
      <TodoLIstP2 todos1={todos}
      onchangetodo= {handleEditTodo} 
      ondelettodo = {handleDeleteTodo}
      />
    </div>
  );
}

export default TodoLIstP1;
