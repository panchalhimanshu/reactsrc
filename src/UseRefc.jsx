import React, { useRef} from 'react';

var data = [
    {
        titile : "title 1",
        subtitle : "Subtitle 1"
    },
    {
        titile : "title 2",
        subtitle : "Subtitle 2"
    },
    {
        titile : "title 3",
        subtitle : "Subtitle 3"
    }
]


function UseRefc() {

    var im = [
        {
            colos : "red"
        },
        {
            colos : "blue"
        },
        {
            colos : "green"
        }
    ]



  const divRefs =
  useRef(data.map(() => React.createRef()
  ));
 
var x = useRef();
var Colo = ()=>
{
  divRefs.current.map((v,x)=>
  {
    v.current.style.color = im[x].colos
    console.log(v.current)
  })
}




  return (
    <div>
        <button onClick={Colo}>Click</button>
        <div >
        {
            data.map((v,i)=>
            (
                <div  key={v.titile} ref={divRefs.current[i]}>
                    <h1 ref={x}>{v.titile}</h1>
                    <h3>{v.subtitle}</h3>
                </div>

            ))
        }
        </div>

    </div>
  );
}

export default UseRefc;
