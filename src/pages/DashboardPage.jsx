import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
    const { user, logout } = useAuth();

    return (
        <section className="page">
            <div className="home-hero">
                <span className="page-badge">Ruta protegida</span>
                <h2 className="page-title">Bienvenido, {user?.name}</h2>
                <p className="page-text">
                    Solo puedes ver esta página porque iniciaste sesión. Si no hay
                    usuario autenticado, PrivateRoute te redirige automáticamente a
                    Sign In.
                </p>
            </div>

            <button className="counter-button" style={{ width: "auto", padding: "0 1.25rem" }} onClick={logout}>
                Cerrar sesión
            </button>
        </section>
    );
};

export default DashboardPage;
