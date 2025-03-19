import { useState } from 'react'
import './App.css'
function App() {
  const [headingText, setHeadingText] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name,setname]=useState("");
  function handleClick() {
    setHeadingText(name);
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event)
  {
   const value= event.target.value
   setname(value);
  }
  return (
    <div className="container">
    <h1>Hello {headingText}</h1>
    <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
    <button
      style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Submit
    </button>
  </div>
  )
}
export default App
