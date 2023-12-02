import React, { useEffect, useState } from 'react';
import CreateConnection from './Chat';


function ChatRoomNo({id}) {

  var [servers,setservers] =  useState("http//himanshu...1243")

useEffect(()=>{

    var connecteds =  CreateConnection(servers,id)
    connecteds.connect()

    return()=>
    {
      connecteds.disconnect()
    }


},[servers,id])

    return (
      <div>
      <h1>Welcome  {id}  </h1>
      </div>
    );
  }



function ChatRoomNo1() {

   var [choice,setchoice] = useState("Genral")
    
  return (
    <div>
      Choice :<select value={choice} onChange={(e)=>{setchoice(e.target.value)}}>
        <option>Genral</option>
        <option>Travel</option>
        <option>Music</option>
      </select>

   {/* <li> {choice}</li> */}

   <ChatRoomNo id={choice}/>

    </div>

  );
}

export default ChatRoomNo1;
