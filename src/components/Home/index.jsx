import React from 'react'
import styles from "./home.module.scss";
import Card1 from '../Card'
import { useState, useEffect } from 'react'

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.h1}>Listado productos</h1>
      {productos.map((producto) => (
        <Card1 key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Home;



