
import './App.css'
import NavBar from './components/NavBar'
import Content from './components/Content'

function App() {
  const actors = [
    {
      img:"https://i.pinimg.com/originals/ae/8c/d3/ae8cd31094f57505bad71fddcf0bfa24.jpg",
      name:"Robert Downey Jr"
    },
    {
      img:"https://imgs.search.brave.com/BZgmwBO2HqZ19UciueuLi2aU51Gn4QJfn8cEX_HeLZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkwL2Uy/L2RmLzkwZTJkZjFm/MGNjODQ5NWEzZGEw/ZDYzMTMyMGI1Mzdh/LmpwZw",
      name:"Chris Hemsworth"
    },
    {
      img:"https://imgs.search.brave.com/uLFsOhbSjrvHufVyoE4gJXArePWvjh9iZAohqPCZZTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy0xMTUz/OTc3MjgxLmpwZz9j/cm9wPTF4dzoxeGg7/Y2VudGVyLHRvcA",
      name:"Tom Holland"
    },
    {
      img:"https://imgs.search.brave.com/QYZO55xL_YcjbOZDds9ZhcQFUoq4Qed4HwwFqomQ2nQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/ODI2LzU3My9zbWFs/bC9sb3MtYW5nZWxl/cy1tYXItNC1jaGFk/d2ljay1ib3NlbWFu/LWF0LXRoZS0yNHRo/LXZhbml0eS1mYWly/LW9zY2FyLWFmdGVy/LXBhcnR5LWF0LXRo/ZS13YWxsaXMtYW5u/ZW5iZXJnLWNlbnRl/ci1mb3ItdGhlLXBl/cmZvcm1pbmctYXJ0/cy1vbi1tYXJjaC00/LTIwMTgtaW4tYmV2/ZXJseS1oaWxscy1j/YS1mcmVlLXBob3Rv/LmpwZw",
      name:"Chadwick Boseman"
    },
  ]
  return (
    <>
      <div>
        <NavBar/>
        <Content actor={actors}/>
      </div>
    </>
  )
}

export default App
 