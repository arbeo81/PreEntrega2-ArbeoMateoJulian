import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./home.module.scss";

const Home = () => {
  const activeStyle = {
    color: "black",
  };
    return (
  
      <nav className={styles.section}>
        <NavLink className={styles.sectionDiv}
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h3>Productos</h3>
        </NavLink>
        <NavLink className={styles.sectionDiv}
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h3>Categorias</h3>
        </NavLink>
       
      </nav>
    );
  };

export default Home

