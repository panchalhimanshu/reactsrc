import React from 'react';

function Liprint() {
 

     
  const  op = []
 
  for(let i=0;i<100;i++)
  {
    op.push(<li>Himanshu</li>)
  }  

  
    return (
    <ul>{op}</ul>
  );
}

export default Liprint;
