import PropTypes from "prop-types";
import React from 'react'


function Himanshu(PropsSimple)
{
    return(
        <>
       <h1 className="abc">
         {PropsSimple.name}
         {PropsSimple.ex}

        {PropsSimple.age}
        {PropsSimple.ex}

        {PropsSimple.course}
       </h1>
        </>
    )
}
Himanshu.propTypes = {
    name:PropTypes.array,
    age:PropTypes.string,
    course:PropTypes.string
}

Himanshu.defaultProps = {
    name:[1,2,3,true,"Yash"],
    age:12,
    course:"React",
    ex : <br/>
}
export default Himanshu;