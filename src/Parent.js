import React, { useState } from 'react';
import Child1 from './Child1';
import ParenetMap from './ParenetMap';

var list = [
    {id:"1" ,title : "mango"},
    {id:"2" ,title : "apple"},
    {id:"3" ,title : "orange"},

]

function Parent() {

  const [todo,settodo] =  useState(list)

 

console.log(todo)
   var getdata = (data)=>
    {
     settodo(
      [ 
        ...todo,
        {
            id:todo.length++,
            title : data
        }
 ]
     )
    }

 


    var handleEditTodo = (nextTodo)=>{
      settodo(
        todo.map((v)=>
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
      console.log(nextTodo)
    }
 

    const handleDeleteTodo = (todoId)=>{

      return settodo(
           todo.filter((t)=>{
               return t.id != todoId
           })
       )
   }

  return (
    <div>
      <Child1 onClick = {getdata}/>



      {/* <h1> {todo.map((v,i)=>
      {
        return(
            <li>
                {v.title}
            </li>
        )
      })} </h1> */}


      <ParenetMap todo={todo} changetosolist={handleEditTodo} delettotdolist={handleDeleteTodo}/>
    </div>
  );
}

export default Parent;
