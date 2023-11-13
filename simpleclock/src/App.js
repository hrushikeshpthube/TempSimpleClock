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
setInterval(UpdateTime,1000);
  return(
    <>
      <h1>{cTime}</h1>
     
    </>
  )

}
export default App;