import React from 'react';
import testImg from "./imges/testImg.webp";


function Imageget() {
  return (
    <>
      <img src='https://th.bing.com/th/id/R.d8aedc575ac32a253b5be5d25a52d598?rik=aLHj1W5emKA1Iw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2f1573618audi-car-images.jpg&ehk=EF0VdTd7DJoHQviRvsvMwZOxXN8XnzPldXhNrNT4Rl0%3d&risl=&pid=ImgRaw&r=0' height={500} />

  <img src={testImg} height={500}/>

    </>
  );
}

export default Imageget;
