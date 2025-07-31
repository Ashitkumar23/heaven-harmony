import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Product from "./pages/Products"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/"  element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
