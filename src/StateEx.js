import React from 'react';
import testImg from "./imges/testImg.webp";
import virat from "./imges/virat.jpg"

// 614331681572
class StateEx extends React.Component {

  
    constructor()
    {
     super()
        this.state = 
        {
            count : <img src= {testImg} alt='imgs' height={100} width={100}/>
        }
    }


    update = ()=> {
        
      this.setState(
        {
          count : <img src= {virat} alt='imgs' height={100} width={100}/>
        }
      )



      // constructor()
      // {
      //  super()
      //     this.state = 
      //     {
      //         count : 1
      //     }
      // }
  
  
      // update = ()=> {
          
      //   this.setState(
      //     {
      //       count : 20
      //     }
      //   )



    // update = ()=> {
    //   this.setState(
    //     {
    //       count : this.state.count+1
    //     }
    //   )


      // update = ()=> {
      //    this.setState(()=>
      //    (
      //  {count : this.state.count+1 }
      //  {count : this.state.count*2 }

      //    ))

  
      // update = ()=> {
      //    this.setState((p)=>
      //    (
      //  {count : p.count +1}
      //    ))



      

    } 
    

  render()
  {
    return (
        <>
        <h2>{this.state.count}</h2>
        <button onClick={this.update}>Click</button>
        </>
      );
  }
}

export default StateEx;
