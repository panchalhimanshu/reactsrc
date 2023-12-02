import React, { useReducer } from 'react';

function UseReduseEx2() {

    var Fun = (val,action)=>
    {
       return [
        
        {
          ...val[0],
        name : "Bunty",
        add : {
          ...val[0].add,
          Office : {
            ...val[0].add.Office,
            office1 :"SGGGGGGG"
          }
        }
       }
       ,
       {
        ...val[1]
       }
      ]

    }
    

var [mark , updatemark] =   useReducer(Fun , 
  (
    [ {
  name : "himanshu",
  age : "18",
  add : {
    home : "CG",
    Office : {
      office1 : "SG1",
      office2 : "SG2"
    }
  }
}
,
{
  name : "Kano"
}
]
))

  return (
    <div>
{mark[0].name}
{mark[1].name}
{mark[0].age}
{mark[0].add.Office.office1}



{mark[0].title}

<button onClick={()=>
{
    updatemark([{title: "Bunty"}])
}}>Update</button>

    </div>
  );
}

export default UseReduseEx2;
