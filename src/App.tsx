import NavBar from './components/Navbar/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Cart from './Cart'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import About from './components/pages/AboutUs'
import ProductPage from './components/pages/product'
function App() {
  return (
    <div>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
