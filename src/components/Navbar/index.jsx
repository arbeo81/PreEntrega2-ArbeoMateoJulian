import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { BsCartFill } from 'react-icons/Bs';

const Navbar = () => {
  const activeStyle = {
    color: "black",
  };

  return (
  
    <nav className={styles.navbar}>
      <NavLink
      to="/">
      <img className={styles.logo} style={activeStyle} src="https://www.bebecenter.es/22918-large_default/servicio-de-montaje.jpg" alt="logo" width="120" height="75"  />
      </NavLink>
      <NavLink 
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <h4>Home</h4>
      </NavLink>
      <NavLink
        to="/productos/category/men's%20clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4>Productos Hombre</h4>
      </NavLink>
      <NavLink
        to="/productos/category/women's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4>Productos Mujer</h4>
      </NavLink>
      <NavLink
        to="productos/category/jewelery"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4>Productos Joyeria</h4>
      </NavLink>
      <NavLink
        to="productos/category/electronics"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4>Productos Electronica</h4>
      </NavLink>

      <NavLink 
        to="/carrito"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <BsCartFill className={styles.icono}/>
      </NavLink>
    </nav>
  );
};



export default Navbar; 