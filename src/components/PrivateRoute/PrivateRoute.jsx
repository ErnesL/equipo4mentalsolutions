//Lee el contexto, si hay un usuario registrado te deja pasar a la vista privada. si no, no

import { Navigate } from "react-router-dom";
import { HOME_URL } from "../../constants/urls";
import { useUserContext } from "../../contexts/UserContext";

export function PrivateRoute({ children }) {
  const { user, isLoading } = useUserContext();

  if (isLoading) {
    return <h1>LOADING USER...</h1>;
  }

  if (!isLoading && !user) {
    return <Navigate to={HOME_URL} />;
  }
  return children;
}
