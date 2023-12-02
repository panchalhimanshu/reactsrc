import React from 'react';

// function ae()
// {
// var btn = document.getElementById("btn")


//     alert("hello.....!")
//     btn.style.background ="red"

// }



class ClickMethods extends React.Component
{

   xl =   function ae()
{
var btn = document.getElementById("btn")

    alert("hello.....!")
    btn.style.background ="red"

}
    render()
    {
        return(
            <>
<button onClick={this.xl} id='btn'>Click Class</button>
            </>
        )
    }
}











function ClickMethod() {

    // var btn = document.getElementById("btn") === Arror ape

    function ae()
    {
    var btn2 = document.getElementById("btn2")
    
    
        alert("hello.....!")
        btn2.style.background ="red"
    
    }

  return (
    <>
     <button onClick={ae} id='btn2'>Click Function</button><br/>
     <ClickMethods/>
    </>
  );
}

export default ClickMethod;
