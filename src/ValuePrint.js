
import React from 'react';
 
function Value() {

    const x =30;
  return (
    <div>
      {x}
    </div>
  );
}

class ValuePrint extends React.Component
{
    x= 20;

    render()
    {

        return(
            <>
           {this.x}
          <Value/>

            </>
        )
    }
}

export default ValuePrint;
