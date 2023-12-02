import React from 'react';

class Statearray extends React.Component {


    constructor()
    {
        super();
        this.state = {
            array1 : {"hello" : "Himanshu"},
        array:[ {"hello":"himanshu"}]
        }
    }

    updateobject = ()=>
    {
         this.setState(
            {
                array1 : {"hello" : "Bunty"},
                // array : [{"hello" : "bunty"}]
                array:[ {"hello":"himanshu2"} ]
            }
         )
    }




 render()
 {
    return (
        <div>
            <h1>{this.state.array1.hello}</h1>
            <h1>{this.state.array[0].hello}
                </h1>
            <button onClick={this.updateobject}>changeValue</button>
        </div>
      );
 }
}

export default Statearray;
