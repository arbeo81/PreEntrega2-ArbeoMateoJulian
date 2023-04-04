import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./card.module.scss";



const Card1 = ({producto}) => {
  return (
    <Link to={`/products/${producto.id}`}>
    <div className={styles.container}>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
      <CardMedia className={styles.cardMedia}
        sx={{ height: 300 }}
        image={producto.image}/>
      <CardContent className={styles.cardContent}>
        <Typography className={styles.title}>
          {producto.title}
        </Typography >
        <Typography className={styles.description}>
        {producto.description}
        </Typography>
        <Typography className={styles.price}>
        ${producto.price}
        </Typography>
        <Typography className={styles.category}>
        ${producto.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.button}>Ver más</Button>
      </CardActions>
    </Card>
    </div>
    </Link>


  )
}

export default Card1