import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="page">
      <h2 className="page-title">Pagina no encontrada</h2>
      <p className="page-text">La pagina solicitada no se encuentra o no existe</p>
      <p className="page-text">Un mensaje adicional a esto</p>
      <Link to="/home" className="nav-link">
        Regresar
      </Link>
    </section>
  );
};

export default NotFoundPage;
