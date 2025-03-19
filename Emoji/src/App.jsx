// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Emoji from './component/emoji'
import emojipedia from './emojipedia'
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map((emoji)=>{

       return (
      <Emoji
      Key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
       )

      })}
      </dl>
    </div>  
  )
}

export default App

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

// export default App;
