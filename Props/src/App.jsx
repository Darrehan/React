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
