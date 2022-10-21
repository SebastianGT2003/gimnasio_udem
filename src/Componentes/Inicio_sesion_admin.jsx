import "../Estilos/Inicio_sesionadmin.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";
import sesion from "../Modelo/sesion_admin";



function Inicio_admin() {
  const [email, setEmail] = useState(""); /* Se declaran los estados de las constantes */
  const [contraseña, setContraseña] = useState("");

  const inicio_sesion_adm= new sesion(email,contraseña)

  return (
    <main>
      <div className="container1ad">
      <div className="rightad">
          <div className="botonderechaad">
            <div className="adminad">
              <Link to="/" type="button" className="btn btn-danger btn btn-danger mr-4 position-absolute top-4 start-0">
                Regresar
              </Link>
            </div>
          </div>

          <div className="centerformad">
            <div className="backgroudformad">
              <main class="form-signin w-100 m-auto">
                <form onSubmit={inicio_sesion_adm.validar_inicio_sesion}> {/* Se llama el metodo de la clase sesion */}
                  <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
                  <div class="form-floating ">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)} /* Se captura lo que hay en el imput */
                      placeholder="name@example.com"
                      required
                    />
                    <label for="email">Correo electronico</label>
                  </div>
                  <div class="form-floating mt-3">
                    <input
                      type="password"
                      class="form-control"
                      id="contraseña"
                      value={contraseña}
                      onChange={(ev) => setContraseña(ev.target.value)} /* Se captura lo que hay en el imput */
                      placeholder="Contraseña"
                      required
                    />
                    <label for="contraseña">Contraseña</label>
                  </div>
                  <div class="mb-3">
                    <button
                      class="w-100 btn btn-lg btn-danger mt-3"
                      type="submit"
                      id ="boton_inicio"
                    >
                      Iniciar sesion
                    </button>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
        <div className="leftad">
          <h1>¡Que gusto volverte a ver admin!</h1>
        </div>
        
      </div>
    </main>
  );
}

/* document.getElementById("boton_inicio").addEventListener("click",x=>
{
  let email = document.getElementById("email")
  let pass = document.getElementById("contraseña")
  login(email.value,pass.value)
}) */


export default Inicio_admin;
