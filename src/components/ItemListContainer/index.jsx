import React from 'react'
import Card from '../Card'
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import  styles  from "./ItemListContainer.module.scss";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const { Name } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${Name}`)
    .then(res => res.json())
    .then(data => {
      setProductos(data);
      const categoriasElegidas =[...new Set(data.map((producto) => producto.category))];
      setCategorias(categoriasElegidas);

    });
  }, [Name]);



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
            to={`/productos/category/${categoria}`}
            activeclassname="active"
            onClick={() => setCategoriaSeleccionada(categoria)}>
            <h3 className={styles.tituloCategorias}>Productos de la categoria {categoria}</h3>
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
