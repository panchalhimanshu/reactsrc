import React, { useContext } from 'react';
import { Property } from './Createcontent';

function Child2() {

 var child2 = useContext(Property)

  return (
    <div>
      {child2[0].money - 3000}
    </div>
  );
}

export default Child2;
