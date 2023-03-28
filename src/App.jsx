import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import CardDetail from './components/ItemDetailContainer'
import ItemlistContainer from './components/ItemListContainer'
import ItemListContainer from './components/ItemListContainer'
import Categorias from './components/Categorias'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  const [productos, setProductos] = useState ([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      setProductos(data);
    });
  }, []);

  console.log(productos);

  return (
    <div>
      <Navbar/>
      <Routes>    
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/category" element={<Categorias />} />
      <Route path="/category/men's clothing" element={<ItemListContainer productos={productos} category="men'sclothing"/>} />
      <Route path="/category/men's clothing/:id" element={<ItemDetailContainer/>} />
      <Route path="/category/women's clothing" element={<ItemListContainer productos={productos} category="women'sclothing"/>} />
      <Route path="/category/women's clothing/:id" element={<ItemDetailContainer/>} />
      <Route path="/category/electronics" element={<ItemListContainer productos={productos} category="electronics"/>} />
      <Route path="/category/electronics/:id" element={<ItemDetailContainer/>} />
      <Route path="/category/jewelery" element={<ItemListContainer productos={productos} category="jewelery"/>} />
      <Route path="/category/jewelery/:id" element={<ItemDetailContainer/>} />
      <Route path='/products' element={<ItemlistContainer productos={productos}/>} />
      <Route path="/products/:id" element={<ItemDetailContainer/>} />
      <Route path="/404" element={<h1>404: Not Found</h1>} />
      </Routes>
      
    </div>
  )
}

export default App
