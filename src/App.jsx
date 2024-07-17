import './App.css'
import About from './component/About'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Home from './component/Home'
import Navbar from './component/Navbar'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import{ CartProvider } from "react-use-cart"

function App() {
   return (
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      

      <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
