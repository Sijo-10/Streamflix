import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Moviecard from './Components/Moviecard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Movies from './Pages/Movies'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Moviecard' element={<Moviecard />}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Movies' element={<Movies/>}/>
    </Routes>
    <Footer />

    </>
  )
}

export default App
