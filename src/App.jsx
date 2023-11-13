import { } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Produtos from './Products'
import Projeto from './Projeto'
import Login from './Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Aplicativo' element={<Produtos/>}/>
      <Route path='/Sobre' element={<About/>}/>
      <Route path='/Projeto' element={<Projeto/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
