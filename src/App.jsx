import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ShoppingCar from './pages/ShoppingCar'
import gmail from '../src/img/gmail.png'
import twitter from '../src/img/gorjeo.png'
import instagram from '../src/img/instagram.png'
import linkedin from '../src/img/linkedin.png'

function App() {
  const [count, setCount] = useState(0)
  const loading = useSelector(state => state.loading)

  return (
    <div className="App">
      <HashRouter>

        <Header />
       { loading && <LoadingScreen/>}
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/shopping'element={<ShoppingCar/>} />

        </Routes>
        <footer>
          <h5 className='name-academ'>Academlo enero 2023</h5>
          <div  className='container-logo'>
            <img className='icon-footer' src={gmail} alt="" />
            <img className='icon-footer' src={twitter} alt="" />
            <img className='icon-footer' src={instagram} alt="" />
            <img className='icon-footer' src={linkedin} alt="" />
          </div>
        </footer>
      </HashRouter>
    </div>
  )
}

export default App
