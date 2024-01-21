import { useState } from 'react'
import './App.css'

function App() {
   let now = new Date().toLocaleTimeString();
  //  React useState hook
   const [timebuddy, setTime] = useState(now);
   setInterval(gettime,1000);
  function gettime()
  {
  let newTime = new Date().toLocaleTimeString();
   setTime(newTime.replace("AM","").replace("PM",""))
  }
  return (
<div className="container">
<h1> {timebuddy} </h1>
<button onClick={gettime}>Get Time</button>
</div>
  
  )
}

export default App
