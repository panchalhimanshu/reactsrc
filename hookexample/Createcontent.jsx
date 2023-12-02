import React, { createContext } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';


export const Property = createContext();

function Createcontent() {

  return (
    <div>

        <Property.Provider value={[{prop:"realEstate",money:5000}]}>
         <Child1/>
        <Child2/>
       </Property.Provider>
      
    </div>
  );
}

export default Createcontent;
