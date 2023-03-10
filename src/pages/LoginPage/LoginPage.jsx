import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { REGISTER_URL } from "../../constants/urls";
import {
  loginWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import styles from "./LoginPage.module.css";

//Esta es nuestra pagina para iniciar sesion
export function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    await loginWithEmailAndPassword(email, password);
    navigate(USERPROFILE_URL);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Bienvenido!</h1>
        <p className={styles.welcomeTxt}>
          Inicia sesión e inspecciona tus personajes favoritos.
        </p>

        {/* EMAIL FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="email">
            <span>Ingresa tu email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Eg. john@email.com"
            onChange={handleOnChange}
          />
        </div>

        {/* PASSWORD FIELD */}
        <div className={styles.inputContainer}>
          <label htmlFor="password">
            <span>Ingresa tu contraseña</span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Entrar
        </button>

        <button
          type="button"
          className={styles.googleBtn}
          onClick={handleSignWithGoogle}
        >
          Iniciar con google
        </button>

        <Link to={REGISTER_URL} className={styles.loginRedirect}>
          ¿No tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Regístrate</span>
        </Link>
      </form>
    </div>
  );
}
