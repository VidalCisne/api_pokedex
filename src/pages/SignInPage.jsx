import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const SignInPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        try {
            await login({ email, password });
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="page">
            <h2 className="page-title">Sign In</h2>
            <p className="page-text">
                Use this route to handle user authentication flow in your guard router.
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
                <label className="auth-field">
                    <span>Correo</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tucorreo@ejemplo.com"
                        required
                    />
                </label>

                <label className="auth-field">
                    <span>Contraseña</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        required
                    />
                </label>

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="counter-button" style={{ width: "auto", padding: "0 1.5rem" }}>
                    Entrar
                </button>
            </form>
        </section>
    );
};

export default SignInPage;
