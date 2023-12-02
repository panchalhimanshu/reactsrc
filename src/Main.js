import React, { useState } from 'react'
import AddToDo from './AddToDo';
import TaskList from './TaskList';

function App() {



 let nextId = 4;

    const intialTodos = [
        {id:1,title:"Apple"},
        {id:2,title:"Banana"},
        {id:3,title:"Mango"}
    ];
    const [todos,setTodos] = useState(intialTodos);

    const handleAddTodo = (title)=>{
        setTodos([
            ...todos,
            {
                id:nextId++,
                title:title
            }
        ])
    }

    console.log(todos)

    const handleChangeTodo = (nextTodo)=>{

        setTodos(
            todos.map((t)=>
            {

                if(t.id == nextTodo.id)
                {
                    return nextTodo;
                }
                else 
                {
                    return t;
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

        <AddToDo onaddTodo={handleAddTodo}/>
        <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        />
      
    </div>
  )
}

export default App


