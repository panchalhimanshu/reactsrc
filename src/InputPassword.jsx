import React, { useState } from 'react';

function InputPassword() {

    const [pass , showpass] = useState("password")
 
    var sp = () => {
        showpass("text")
    }

  return (
    <div>
      <input type={pass} />
      <input type="checkbox" onClick={sp}/>
    </div>
  );
}

export default InputPassword;
