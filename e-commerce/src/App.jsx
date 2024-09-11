
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Contact from "./pages/contact/Contact"
import Layoutpage from "./pages/layoutpage/Layoutpage"
import Singleproduct from "./pages/singleproduct/Singleproduct"
import Cart from "./pages/cart/Cart"
import { CartProvider } from './component/cartcontext/Cartcontext'
import Sidecart from './component/sidecart/Sidecart'


function App() {


  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route id="mainroute" path="/" element={<Layoutpage/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/shop/:category" element={<Shop/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path="/" element={<Sidecart />} />
      <Route path="/product/:id" element={<Singleproduct/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>

  )
}

export default App
