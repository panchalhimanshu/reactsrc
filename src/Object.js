import React from 'react';


function Hm()
{
  var himanshu = [
    {name : "llssd"},
    {name : "dnj"},
    {name : "djdh"},
    {name : "kno"}
  ] 
  
  var x = `<h1>chhc</h1>`
    
  for(var i=0;i<himanshu.length;i++)
  {
    x += 
    `<li>
    ${himanshu[i].name}</li>`
  }  

  
  // himanshu.map((v)=>
  // {
  //     x += 
  //   `<li>
  //   ${v.name}</li>`
  
  // })
  
  // himanshu.forEach((v)=>
  // {
  //     x += 
  //   `<li>
  //   ${v.name}</li>`
  // })

  // for( var vall of himanshu)
  // {
  //   x += 
  //   `<li>
  //   ${vall.name}</li>`
  // }

  // for( var valll in himanshu)
  // {
  //   x += 
  //   `<li>
  //   ${valll}</li>`
  // }
  
  
  document.querySelector(".lm").innerHTML = x
}
// Hm()

function Arraytoobject() {
  return (
    <>
      <button onClick={Hm}>Click</button>
      
      <div className='lm'></div>
    </>
  );
}

export default Arraytoobject;
