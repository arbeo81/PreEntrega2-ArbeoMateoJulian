import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = () => {
  const [producto, setProductos] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  const getProducto = async () => {
    try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProductos(data);
    setLoading(false);
    } catch (error) {
      setProductos(null);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (!producto) {
    return <Navigate to="/404" />
  }

  return (
    <div>
    <Card className={styles.container}>
    <Card.Img className={styles.image} variant="top" src={producto.image} />
    <Card.Body>
      <Card.Title className={styles.title}>{producto.title}</Card.Title>
      <Card.Text className={styles.description}>
        {producto.description}
      </Card.Text>
      <Card.Text className={styles.price}>
        {producto.price}
      </Card.Text>
      <Card.Text className={styles.category}>
        Categoria
        {producto.category}
      </Card.Text>
      <Button className={styles.button}>Comprar</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ItemDetailContainer


