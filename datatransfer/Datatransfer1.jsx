import React from 'react';
import Datatransfer from './Datatransfer';

function Datatransfer1()
{
   var v = {
        text : "center",
        color : "white",
        background : "green"
    }
    var p = Datatransfer(v)

    // console.log(p)s

    return(
        <>
        {p}
        </>
    )
}
export default Datatransfer1;