import React from 'react';

class Stateex2 extends React.Component {

    constructor()
    {
        super();
        this.state = 
        {
            numbers :  1
        }
    }

    componentDidMount()
    {
        console.log("mounting.....")
    }
   

    valuechang = ()=>
    {
        this.setState(
            {
                numbers : this.state.numbers+1
            }
        )
    }

    shouldComponentUpdate()
    {
        console.log("do you want update...?");
        return true;
    }

    componentDidUpdate()
    {
   console.log("update.......")
    }

  




 render()
 {

    return (
        <>
          <h1>{this.state.numbers}</h1>
          <button onClick={this.valuechang}>Update</button>
        </>
      );
 }
}

export default Stateex2;
