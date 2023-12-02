import React from 'react';

const Arr = [
    {name: "Kano"},
    {name: "bunty"},
    {name: "chinku"},
    {name: "himanshu"}
]


function Array() {

    var Forloop = [];

    for(var i=0;i<Arr.length;i++)
    {
        Forloop.push(Arr[i].name);
    }

    //  const map = Arr.map(function(v,i,a)
    //  {
    //     return (v.name)
    //  })


    


    //  var ForEach = []

    //  Arr.forEach(function(v,i)
    //  {
    //     ForEach.push(Arr[i].name);
    //  })





    // NO USE THIS LOOPS



    // const Filterx = Arr.filter(function(v,i,a)
    // {
    //    return (v.name)
    // })


    //  var ForOf = []
    //  for(va of Arr)
    //  {
    //     ForOf.push(va);
    //  }
  

  return (
    <>
    <h1>{Forloop}</h1><br/>

     {/* <h1>{map}</h1><br/> */}

    {/* <h1>{ForEach}</h1><br/> */}








    {/* <h1>NO USE THIS LOOPS</h1> */}


    {/* <h1>{Filterx}</h1><br/> */}


    {/* <h1>{ForOf}</h1><br/> */}










 {/* {Arr.map((v,i)=>{
 return <div>{v.name}</div>
})} */}

{/* BRACKET () CHANGE KARVA THI RETURN KARVU NAHI */}

{Arr.map((v,i)=>(
  <div>{v.name}</div>
))}




{/* {} sathe return */}
{Arr.map((v,i)=>
{
  return(
    <div>{v.name}</div>
  )
})}


    </>
  );
}

export default Array;
