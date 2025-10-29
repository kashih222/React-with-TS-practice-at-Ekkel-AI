import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/products'  element={<Products/>}/>
        <Route path='/services'  element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App