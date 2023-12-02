import React from 'react';


class StateEx1 extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            counts : [
                {"name" : "hello1" },
                {"name" : "hello2" },
                {"name" : "hello3" }
            ]
        }
    }


    update = ()=> {
        
      this.setState(
        {
          counts :  [
            {"name" : "hello55" },
            {"name" : "hello66" },
            {"name" : "hello77" }
        ]
        }
      )
      }

      

 
    
    render()
  {

    // console.log(this.state.counts)

    var xl = this.state.counts.map((v,i,a)=>
    
    {
          return v.name;
    })

  
    return(
        <>

        <div>{xl}</div>

        <button onClick={this.update}>State-Object-Click</button>
       </>
    )
  }
}
export default StateEx1;