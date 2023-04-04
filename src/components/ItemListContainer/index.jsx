import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import  styles  from "./ItemListContainer.module.scss";
import ItemDetailContainer from '../ItemDetailContainer';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    fetch("http://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      setProductos(data);
      const categoriasElegidas =[...new Set(data.map((producto) => producto.category))];
      setCategorias(categoriasElegidas);

    });
  }, []);
  const handleCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  }

const productosFiltrados = categoriaSeleccionada
 ? productos.filter(
    (producto) => producto.category == categoriaSeleccionada
  )
  : productos;

  return (

    <section className={styles.section}>
       <h2>Nuestras categorias</h2>
      <div className={styles.sectionDiv}>
        <NavLink to={"/"} onClick={() => setCategoriaSeleccionada("")}>
        </NavLink>
        {categorias.map((categoria) => (
          <NavLink className={styles.section}
            key={categoria}
            to={`/productos/category/${categoria}`}
            activeclassname="active"
            onClick={() => setCategoriaSeleccionada(categoria)}>
           <h3 className={styles.section}>{categoria}</h3>
          </NavLink>
           
        ))}
      </div>
      <div>
        {productosFiltrados.map((producto) => (
          <Card className={styles.card} key={producto.id} producto={producto} />
        ))}
      </div>
    </section>

  )

}

export default ItemListContainer
