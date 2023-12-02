import React, { useContext } from 'react';
import { Property } from './Createcontent';

function Child1() {

   var pr =  useContext(Property)

  return (
    <div>
    {pr[0].prop}
    </div>
  );
}

export default Child1;
