import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/home'
import Aboutpage from './pages/aboutpage'
import Navbar from './components/Navbar'
import Loginpage from './pages/loginpage'
import Errorpage from './pages/errorpage'
import Contactus from './pages/ContactUs'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Aboutpage/>}>
          <Route path='contactus' element={<Contactus/>} />
        </Route>
        <Route path='/login' element={<Loginpage/>} />
        <Route path='*' element={<Errorpage/>} />
      </Routes>
    </>
  )
}

export default App
