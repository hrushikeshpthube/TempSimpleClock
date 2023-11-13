import React, { useState } from "react";
const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(newTime);
  const [bg, setBg] = useState('red');
  const [name, setName] = useState('Click me');


  const UpdateTime = () => {
    let newCTtime = new Date().toLocaleTimeString();
    setCTime(newCTtime);
  }

  setInterval(UpdateTime, 1000);//to update time by 1 sec


  const BgUpdate = () => {

    // console.log("BGUpdate clicked")
    let newbg = 'green';


    setBg(newbg);
    setName("Clicked= green !");
    ;

  }
  const BgDoubleC = () => {
   let newbg = 'red';

    setBg(newbg);
    setName("Double Clicked =red !!")

  }

  return (
    
      <div style={{ backgroundColor: bg }}>

        <h1>{cTime}</h1>
        <button onClick={BgUpdate} onDoubleClick={BgDoubleC}>{name}</button>
      </div>

   
  )

}
export default App;