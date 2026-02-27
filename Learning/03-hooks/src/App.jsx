import { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(function(){
    console.log("effect line is processing...");
    
  },[count])

  return (
    <>
  <div className='flex gap-10 m-10 text-3xl'>
    <div>{count}</div>
    <div>{count2}</div>
  </div>
  <div className='flex gap-10 m-10 text-3xl'>
    <button onClick={()=>{
      setCount(count+1)
    }}>click</button>
    <button onDoubleClick={()=>{
      setCount2(count2+1)
    }}>dbclick</button>
  </div>
    </>
  )
}

export default App
