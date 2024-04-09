import React, { useState } from 'react'
import './App.css'

function App() {
  // const  [count, setCount] = useState(0)


  // const addValue = () => {
  //   // temp = count +1
  //   setCount(count+1)
  //   // temp = temp +1
  //   setCount(count+1)
  //   // temp = temp +1
  //   setCount(count+1)
  //   // temp = temp +1
  //   setCount(count+1)
  // }
  // const removeValue = () => {
  //   setCount(count-1)
  // }
  // return (
  //   <>
  //     <h1>React course </h1>
  //     <h2> Counter value: {count} </h2>
  //     <button
  //     onClick={addValue}> Add value</button> {" "}
  //     <button
  //     onClick={removeValue}> remove value</button>
  //     <p>footer: {count}</p>
  //   </>
  // )


  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App
