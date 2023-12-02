import React, { useState } from 'react';

function Fetchs() {

    const [inp,upinp] = useState("")

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((file)=>{ return file.json() }).then((datas)=>{
            console.log(datas)

            var content = `<h1>online data</h1>`


            datas.filter((item) =>(
              item.name.toLowerCase().includes(inp.toLowerCase()))
              ).map((val, index) => (
                content +=  `<li>${val.name}</li>`
              ))

            document.getElementById("api").innerHTML = content
          
        })


    

  return (
    <div>
      
      <input type="text" value={inp} onChange={(e)=>{upinp(e.target.value)}}/>
      <div id="api" ></div>

    </div>
  );
}

export default Fetchs;
