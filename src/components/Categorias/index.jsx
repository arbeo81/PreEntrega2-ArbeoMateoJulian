import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import  styles  from "./categorias.module.scss";

const Categorias = () => {
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
      <div className={styles.sectionDiv}>
        <NavLink to={"/"} onClick={() => setCategoriaSeleccionada("")}>
        </NavLink>
        {categorias.map((categoria) => (
          <NavLink className={styles.section}
            key={categoria}
            to={`/category/${categoria}`}
            activeclassname="active"
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
           <h2 className={styles.section}>{categoria}</h2>
          </NavLink>
        ))}
      </div>
      <div>
        {productosFiltrados.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </section>

  )

}

export default Categorias


