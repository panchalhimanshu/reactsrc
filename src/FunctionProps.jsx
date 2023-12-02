import React from 'react';
import propTypes from "prop-types"

function FunctionProps(Propss) {
  return (
    <>
    <h1> {Propss.name} </h1>
    <h1> {Propss.age} </h1>
    <h1> {Propss.course} </h1>
    <h1> {Propss.add} </h1>

    </>
  );
}

FunctionProps.propTypes = 
{
    name : propTypes.string,
    age : propTypes.number,
    course : propTypes.string,
    add : propTypes.string,


}

FunctionProps.defaultProps = {
    name : "panchal himanshu" ,
    age : 20,
    course : "react-js",
    add : "C G Road"
}

export default FunctionProps;
