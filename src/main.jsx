import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { DoctorsPage } from "./pages/DoctorsPage/DoctorsPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { Layout } from "./components/Layout/Layout";
import {
  DOCTORS_URL,
  HOME_URL,
  LOGIN_URL,
  NOTFOUND_URL,
  REGISTER_URL,
  USERPROFILE_URL,
} from "./constants/urls";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
//:doctoresId sirve para mostrar una ruta dinamica
//Route sirve para declarar las rutas de las paginas web

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={<HomePage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route
            path={USERPROFILE_URL}
            element={
              <PrivateRoute>
                <h1>PROFILE PAGE</h1>
              </PrivateRoute>
            }
          />
          <Route path={DOCTORS_URL} element={<DoctorsPage />} />
          <Route path="/doctors/:doctorsId" element={<DoctorsPage />} />
          <Route path={NOTFOUND_URL} element={<h1>ERROR 404: NOT FOUND!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
