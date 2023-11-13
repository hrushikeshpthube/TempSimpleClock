import React, { useState } from "react";
const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(newTime);//for time
  const [bg, setBg] = useState('red');//for background change 
  const [name, setName] = useState('Click me');//for button text change
  const [inpname, setInpName] = useState("");//inputname for input field
  const [fullName, setFullName] = useState();//to display name from input field only after submit button is clicked


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

  const Display = (event) => {
    // console.log(event.target.value);
    setInpName(event.target.value);
  }

  const SubmitHandler = () => {
    setFullName(inpname);

  }

  return (
    <>
      <div style={{ backgroundColor: bg }}>

        <h1>{cTime}</h1>
        <button onClick={BgUpdate} onDoubleClick={BgDoubleC}>{name}</button>
      </div>


      <div>
        <p>This is simple form without form tag</p>
        <h1>Hello {fullName}</h1>
        <input type="text" onChange={Display} />
        <button onClick={SubmitHandler} >Submit</button>
      </div>
    </>

  )

}
export default App;