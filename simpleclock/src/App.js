import React, { useState } from "react";
const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(newTime);//for time
  const [bg, setBg] = useState('red');//for background change 
  const [name, setName] = useState('Click me');//for button text change
  const [inpname, setInpName] = useState("");//inputname for input field
  const [fullName, setFullName] = useState();//to display name from input field only after submit button is clicked
  const [lastName, setLastName] = useState("");//to set  lastname from input field


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

  const SubmitHandler = (event) => {
    event.preventDefault();//to avoid default behaviour of form tag to refresh page on submit.
    setFullName(inpname + lastName);

  }
  const Display2 = (event) => {
    setLastName(event.target.value);

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
        <form onSubmit={SubmitHandler}>
          <div>
            <input type="text" placeholder="Enter first Name" onChange={Display} /><br />
            <input type="text" placeholder="Enter last Name" onChange={Display2} />
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>

  )

}
export default App;