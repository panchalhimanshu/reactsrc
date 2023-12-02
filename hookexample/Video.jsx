import React, { useRef, useState } from 'react';
import './videoplayer.css'

export default function Videxo()
 {
var [play,pause] = useState(false);
var videoref = useRef()

var handlechange = ()=>
{
 console.log(play) 
 
if(!play)
{
  videoref.current.play();
}
else
{
  videoref.current.pause();
}
}


  return (
    <div className='videoplayer'>


<div className="videoframe">


      <video
        width="100%"
        height = "100%"
        ref={videoref}
        onPlay={() => (pause(true))}
        onPause={() => (pause(false))}
      >

        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"/>

      </video>


</div>



<div className="btn">


        <button onClick={handlechange}>
            { play ? <i class='bx bx-pause-circle'></i> : <i class='bx bx-play-circle'></i> }
        </button>


</div>

    </div>
  );
}





