import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/error'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>    
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productos/category" element={<ItemListContainer />} />
      <Route  path="/productos/category/:Name" element={<ItemListContainer/>} />
      <Route path="/products/:id" element={<ItemDetailContainer/>} />
      <Route path="/404" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
