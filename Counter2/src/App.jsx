import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'remixicon/fonts/remixicon.css'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num,setNum] = useState(0)
  const increase = ()=>{
    setNum(num+1)
  }
  const decrease = ()=>{
    setNum(num-1)
  }

  const reset = ()=>{
    setNum(0)
  }
  return (
   <div className='mainBody'>
      <div className='numBer'>
        <h1>{num}</h1>
        <h3 onClick={reset}><i className="ri-restart-line"></i></h3>
      </div>
      <div className="buttons">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>

   </div>
  )
}

export default App
