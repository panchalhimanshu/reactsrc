import React from 'react';

function GetAPI()
{
  
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{return (res.json())})
    .then((data)=>{


       var html = "<h1>API DATA</h1>"

        data.forEach(function(v){

            html += `
          <h2><img src = ${v.url} height = "200px" width = "200px" ></h2>
            `
        })
        
        document.querySelector('.res').innerHTML = html

    })
   
}

function Fetchtoimg() {
  return (
    <>
      <button id='x' onClick={GetAPI}>Click Img</button>
      <div className='res'></div>
    </>
  );
}

export default Fetchtoimg;
