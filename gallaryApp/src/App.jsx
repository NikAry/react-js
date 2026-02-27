import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [responseItem,setResponseItem] = useState([])
  const [index,setIndex] = useState(1)
  const fetcher = async()=>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=50`)
      setResponseItem(response.data)
      
  }

  useEffect(function(){
    fetcher()
  },[index])

    let responsePrint = 'loading...'

  if (responseItem.length>0) {
    responsePrint = responseItem.map(function(elem,idx){
      return <a href={elem.download_url}>
        <div className='h-35 w-40 mt-5 overflow-hidden flex flex-col justify-between items-center' key={idx}>
          <img className='h-30 w-40 object-cover' src={elem.download_url} alt="img here" />
          <h2 className='font-bold '>{elem.author}</h2>
        </div>
      </a>
    })
  }

  return (
    <>
    <div className='font-bold text-2xl flex w-full justify-center backdrop-blur-xl top-0 fixed'>Gallary App</div>
    <div className='flex flex-wrap gap-4 m-3 h-max'>{responsePrint}</div>
    <div className='flex gap-30 justify-center'>
      <button className='bg-amber-400 w-20 rounded border-amber-500 border-2 active:scale-95'
      onClick={()=>{
        if (index>1) {
          setIndex(index-1)
        }
        
      }}
      >Prev</button>
      <button className='bg-amber-400 w-20 rounded border-amber-500 border-2 active:scale-95'
      onClick={()=>{
        setIndex(index+1)
      }}
      >Next</button>
    </div>

    </>
  )
}

export default App
