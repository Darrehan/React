import React, { useState } from "react";
import "./App.css";
function App() {
  // Handling complex state in React
  const [fullName, setFullName] = useState({
    // i can Pass javascript variable object
    fName: "",
    lName: "",
  });
  function handleChange(event) {
    event.preventDefault();
    // object destructuring
    const { value, name } = event.target;
    //  this arrow funtion is taking prevous value of fName and lName
    setFullName((prevValue) => {
      // we can't call event.target.name here inside useState setter call method
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
