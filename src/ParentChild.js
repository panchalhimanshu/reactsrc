import React from 'react';

function Parent(ParentProps) {
  return (
    <div>
        <h3 className='abc'>{ParentProps.name}</h3>
    </div>
  );
}


function Child(ChildProps) {
  const xyz =
  {
    color:"#fff",
    background:"cornflowerblue"
  }
  
    return (
      <div>
        <h1 style={xyz}>{ChildProps.name}</h1>
        <h2><Parent name= "kano"/></h2>
      </div>
    );
  }
export default Child;


