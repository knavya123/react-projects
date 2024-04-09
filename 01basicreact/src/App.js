import { useState } from 'react';

function App() {
  //let counter = 15
  // const [c,setCount] = useState(15)

  // const addValue=() => {
  //   setCount(c+1)
  // }
  // const removeValue=() =>{
  //   setCount(c-1)
  // }

  const [c, setColor] = useState('olive')

  return (

    <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: c }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-green' onClick={() => setColor('green')}> green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-red' onClick={() => setColor('red')}> red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-blue' onClick={() => setColor('blue')}> blue</button>
        </div>
      </div>
    </div>

  )
  {/* <h1>React count {c} </h1>
      <h2> Counter value: {c} </h2>
      <button
      onClick={addValue}> Add value</button> {" "}
      <button 
      onClick={removeValue}> remove value</button>
      <p>footer: {c}</p> */}

}

export default App