import React, { useEffect } from 'react';

function Custom(eventtype,fnsame) {

  console.log(fnsame)

  useEffect(()=>
  {
    window.addEventListener(eventtype,fnsame);

    return()=>
    {
    window.removeEventListener(eventtype,fnsame);
    }
  },[eventtype,fnsame])

}

export default Custom;
