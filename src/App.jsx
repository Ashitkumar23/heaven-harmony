import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Product from "./pages/Products"
import Accessories from "./pages/Accessories"
import Cart from "./pages/Cart"
import Details from "./components/Product-details/Details"
import Arrival from "./pages/Arrival"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/"  element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/new-arrival" element={<Arrival/>}/>
          <Route path='/shopping-cart' element={<Cart/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
