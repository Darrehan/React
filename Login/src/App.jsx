/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../component/Login";
import "./App.css"

var isLoggedIn = false;
const currentTime = new Date(2024, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
  
     <Login
     logedin={isLoggedIn}
     currentTime={currentTime}
      />
    
    </div>
  );
}

export default App;
