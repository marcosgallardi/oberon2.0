import logoMain from "../../assets/logo-main.png";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <>
      <div className={styles.navbarMain}>
        <img src={logoMain} alt="logo-oberon" className={styles.logoMain} />
        <nav className={styles.navMain}>
          <a href="">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Servicios</a>
          <a href="">Contactanos</a>
        </nav>
      </div>
    </>
  );
};
