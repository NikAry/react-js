import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [notes,setNotes] = useState([])

  const titleEditor = (e)=>{
    setTitle(e.target.value)
  }

  const detailEditor = (e)=>{
    setDetail(e.target.value)
  }

  const addNotes = (e)=>{
    e.preventDefault()
    setTitle("")
    setDetail("")
    const copyNotes = [...notes]
    copyNotes.push({title,detail})
    setNotes(copyNotes)
  }

  const deleteNotes = (idx)=>{
    const copyNotes = [...notes]
    copyNotes.splice(idx,1)
    setNotes(copyNotes) 
  }

  return (
    <>
      <h1 className='text-3xl font-semibold m-2 flex justify-center'>Note App</h1>
      <div className='w-screen   h-screen flex gap-7'>
        <div className='w-1/3   h-full mt-2 flex-col'>
          <div className="inputbox h-2/3  ml-5 ">
            <h1 className='text-2xl mt-2 ml-2'>Note :</h1>
            <input type="text" className='mt-2 ml-2 w-full h-7 border-2 cursor-text pl-2  ' placeholder='Title here..' value={title} onChange={titleEditor}/>
            <textarea type="text" className='mt-2 ml-2 w-full h-2/3 cursor-text pl-2 border-2 ' placeholder='Write here....' value={detail} onChange={detailEditor}/><br />
            <button className='  mt-2 ml-2 w-full h-8 cursor-pointer bg-black text-white active:scale-95' onClick={addNotes}>Add note</button>
          </div>
          
        </div>
        <div className='w-2/3   h-full mt-2 mr-2 bg-gray-300 rounded-2xl border-2'>
          <h1 className='ml-4 mt-4 text-2xl font-bold'>Notes :</h1>
          <div className='  flex flex-nowrap'>
            {notes.map((elem,idx)=>{          
              return(
              <div className='h-55 w-46 ml-4 mt-4   bg-amber-100 flex flex-col justify-between '>
                <div>
                  <h2 className='ml-2 mt-2 font-semibold'>{elem.title}</h2>
                  <div className='ml-2 mt-2'>{elem.detail}</div>
                </div>
                <button className='mb-3 bg-rose-600 rounded-full w-2/3 text-white font-semibold m-7' onClick={()=>{deleteNotes(elem,idx)}}>Delete</button>
            </div>
              )
            })}
          </div>
        </div>

      </div>
    </>
  ) 
}

export default App
