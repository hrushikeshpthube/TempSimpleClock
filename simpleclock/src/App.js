import React, { useState } from "react";
const App=()=>
{
  let newTime=new Date().toLocaleTimeString();
  const[cTime,setCTime]=useState(newTime);
  const UpdateTime=()=>
  {
    let newCTtime=new Date().toLocaleTimeString();
    setCTime(newCTtime);
  }

  return(
    <>
      <h1>{cTime}</h1>
      <button onClick={UpdateTime}>GetTime</button>
    </>
  )

}
export default App;