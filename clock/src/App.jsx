import { useState } from 'react'
import './App.css'

function App() {
   let now = new Date().toLocaleTimeString();
  // React useState Hook
  // Initial state 
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
// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
// // const { name, sound} = cat;
// // const { name: catName, sound: catSound } = cat;
// // const { name = "Fluffy", sound = "Purr" } = cat;
// // const {feedingRequirements: {food, water} } = cat;
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./practice";

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour]
// } = honda;
// const {
//   coloursByPopularity: [teslaTopColour]
// } = tesla;
