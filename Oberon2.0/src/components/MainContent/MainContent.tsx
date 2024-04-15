import logoMain from "../../assets/logo-main.png";
import "./MainContent.css";

export const MainContent = () => {
  return (
    <main className="mainContent">
      <div className="container">
        <div className="navbar-main">
          <img src={logoMain} alt="logo-oberon" className="logo-main" />
          <nav className="nav-main">
            <a href="">Inicio</a>
            <a href="">Nosotros</a>
            <a href="">Servicios</a>
            <a href="">Contactanos</a>
          </nav>
        </div>
      </div>
    </main>
  );
};
