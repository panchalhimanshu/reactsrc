import React, { useState } from 'react';


function TodoSerch() {


    const intialTodos = 
    [
        {name:"Leanne Graham"},
        {name:"Ervin Howell"},
        {name:"Clementine Bauch"},
        {name:"Patricia Lebsack"},
        {name:"Chelsey Dietrich"},
        {name:"Mrs. Dennis Schulist"},
        {name:"Kurtis Weissnat"},
        {name:"Nicholas Runolfsdottir V"},
        {name:"Glenna Reichert"},
        {name:"Clementina DuBuque"}
    ];
    
    const [todos,setTodos] = useState(intialTodos);
    const [input, setinput] = useState('');


    var handleAddTodo = (updatetitle)=>{
      
        setTodos([
            ...todos,
            {
                name:updatetitle
            }
        ])
      
    }
console.log(todos)

   
  return (

    <div>

      <TodoLIstP3 titles={handleAddTodo}/>

      <h1>Serch List</h1>

      <input
      type="text"
      placeholder="Search........."
      value={input}
      onChange={(e) => setinput(e.target.value)}
      />
      
      {todos.filter((item) =>(
      item.name.toLowerCase().includes(input.toLowerCase()))
      ).map((val, index) => (
          <div key={index}>{val.name}</div>
      ))}



      {/* <ul >
            {todos.map((t)=>{

                return(
                    <div key={todos.id}>
                      <h1>{t.name}</h1>
                    </div>
                )
            })}
        </ul> */}
        
    </div>
  );
}




function TodoLIstP3({titles}) {

    var [inp,upinp] = useState("")

  return (
    <div> 
      
      <input type="text" name="" id="" value={inp} onChange={(e)=>{
        upinp(e.target.value);
      }}/>

      <button onClick={()=>
      {  
        if(inp == "")
        {
          alert("please enter something")
        }
        else
        {
         titles(inp)
         upinp("")
        }
      }}>ADD</button>

      
      
    </div>
  );
}



export default TodoSerch;
