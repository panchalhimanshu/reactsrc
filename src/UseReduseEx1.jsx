import React, { useReducer } from 'react';

function UseReduseEx1() {


    var changes = (val ,action)=>
    {
      console.log(val)
      console.log(action)

      // return [
      //   {
      //   ...val[0],
      //     age : "25",
      //     hello : {
      //       ...val[0].hello,
      //       one : "kano"
      //     }
      //   }
      // ] 

        if(action[0].name1 == "kano")
        {
          return [
            {
            ...val[0],
              age : "25",
              hello : {
                ...val[0].hello,
                one : "kano"
              }
            }
          ] 
        }
        else
        {
          return [
            {
            ...val[0],
              age : "50",
              hello : {
                ...val[0].hello,
                one : "Himanshu"
              }
            }
          ] 
        }
        console.log(val)
    }

   var [x,y] = useReducer(changes , [{name : "himanshu" ,
age : "12",hello : {
  one : "bunty",two : "kano"
}}])

  return (
    <div>
      <h1 > {x[0].name} {x[0].age} {x[0].hello.one} </h1>

      <button onClick={()=>
    {
        y([
            {
             name1 : "kano",
            }
        ])
    }}>Change val (1)</button>



<button onClick={()=>
    {
        y([
            {
             name1 : "Himansu",
            }
        ])
    }}>Change val (2)</button>


    </div>
  );
}

export default UseReduseEx1;
