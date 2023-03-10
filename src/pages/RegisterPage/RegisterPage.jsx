import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LOGIN_URL, USERPROFILE_URL } from "../../constants/urls";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth-service";
import styles from "./RegisterPage.module.css";

//Esta es nuestra pagina para registrarse
export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
  });

  const onSuccess = () => {
    navigate(HOME_URL);
  };

  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, ...extraData } = formData;
    await registerWithEmailAndPassword(email, password, extraData);
    navigate(USERPROFILE_URL);
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Crea una cuenta</h1>
          <p className={styles.welcomeTxt}>
            Bienvenido! Te invitamos a ser parte de nuestra plataforma.
          </p>

          {/* NAME FIELD */}
          <div className={styles.inputContainer}>
            <label htmlFor="name">
              <span>Ingresa tu nombre completo</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Eg. John Doe"
              onChange={handleOnChange}
            />
          </div>

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

          {/* AGE FIELD */}
          <div className={styles.inputContainer}>
            <label htmlFor="age">
              <span>Ingresa tu edad</span>
            </label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Eg. 24"
              onChange={handleOnChange}
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            onClick={handleSubmit}
          >
            Entrar
          </button>

          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleSignWithGoogle}
          >
            Registro con Google
          </button>

          <Link to={LOGIN_URL} className={styles.loginRedirect}>
            ¿Ya tienes una cuenta?{" "}
            <span className={styles.redirectLink}>Inicia sesión</span>
          </Link>
        </form>
      </div>
    </>
  );
}
