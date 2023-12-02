import React from 'react';


class ClassProps extends React.Component
{
    color = 
    {
        color : "red",
        background : "green"
    }

    click = function hm()
    {
       var functionalertsss = document.getElementById("functionalert")
       var km = document.querySelector(".lm")
       alert("ALERT...!");
    
       if(km.style.color == "blue")
        {
        km.innerHTML = "KANO"
        km.style.color = "cyan"
        functionalertsss.innerHTML = "KANO"
        km.style.background = "Blue"
        }
        
        else
        {
        km.style.color = "blue"
        km.style.background = "hotpink"
        km.innerHTML = "Himanshu"
        functionalertsss.innerHTML = "Function-Alert"
        }
    }

    render()
    {
        return(
            <>
            <h4 style={this.color}>{this.props.name}</h4>
            <h4 style={{color:"blue",background : "hotpink"}} onClick={this.click} className='lm'>{this.props.name}</h4>
            </>
        )
    }
}



export default ClassProps;
