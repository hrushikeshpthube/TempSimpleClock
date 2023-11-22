import React, { useState } from "react";
const App = () => {
  let newTime = new Date().toLocaleTimeString();

  const [cTime, setCTime] = useState(newTime);//for time
  const [bg, setBg] = useState('red');//for background change 
  const [name, setName] = useState('Click me');//for button text change

  const [fullName, setFullName] = useState({
    firstname: "",
    lastName: "",
    email: "",
    phone: ""
  });//to display name from input field only after submit button is clicked


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
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;//object destructuring
    // console.log(event.target.value);
    setFullName((prevValue) => {
      if (name === 'fName') {
        return (
          {
            firstname: value,
            lastName: prevValue.lastName,
            email: prevValue.email,
            phone: prevValue.phone
          })
      }
      else if (name === 'lName') {
        return (
          {
            firstname: prevValue.firstname,
            lastName: value,
            email: prevValue.email,
            phone: prevValue.phone
          })

      }
      else if (name === 'email') {
        return (
          {
            firstname: prevValue.firstname,
            lastName: prevValue.lastName,
            email: value,
            phone: prevValue.phone
          })

      }
      else if (name === 'phone') {
        return (
          {
            firstname: prevValue.firstname,
            lastName: prevValue.lastName,
            email: prevValue.email,
            phone: value
          })

      }
    })
  }

  const SubmitHandler = (event) => {
    event.preventDefault();//to avoid default behaviour of form tag to refresh page on submit.
    alert("Form Submitted");

  }


  return (
    <>
      <div style={{ backgroundColor: bg }}>

        <h1>{cTime}</h1>
        <button onClick={BgUpdate} onDoubleClick={BgDoubleC}>{name}</button>
      </div>


      <div>
        <p>This is simple form without form tag</p>
        <h1>Hello {fullName.firstname} {fullName.lastName}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <form onSubmit={SubmitHandler}>
          <div>
            <input type="text"
              placeholder="Enter first Name"
              name="fName"
              autoComplete="off"
              onChange={Display}
            /><br />
            <input type="text"
              placeholder="Enter last Name"
              name="lName"
              autoComplete="off"
              onChange={Display}
            /><br />
            <input type="email"
              placeholder="Enter email"
              name="email"
              autoComplete="off"
              onChange={Display}
            /><br />
            <input type="number"
              placeholder="Enter phone Number"
              name="phone"
              autoComplete="off"
              onChange={Display}
            /><br />
            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>

  )

}
export default App;