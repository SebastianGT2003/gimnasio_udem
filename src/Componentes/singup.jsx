import "../Estilos/singup.css";
import quienes from "../imagenes/Quienes somos.jpg"
import imagen from "../imagenes/Quienes somos 1.jpg"

import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Cerrar() {
  return (
    <div className="img_fondo">
      <div className="botonderechacerrar">
        <div class="col ">
          <Link to="/" type="button" class="btn btn-danger mr-4 position-absolute top-4 start-0">  {/* Se redirecciona la interfaz principal */}
            Cerrar sesion
          </Link>
          <div class="col col-12 mt-3">
            <button type="button" class="btn btn-danger mr-4 position-absolute top-5 end-0">
              Horarios
            </button>
          </div>
        </div>
      </div>
      <div className="centerform_cerrar">
        <div className="backgroudform_cerrar">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3 bg-danger">
                <h4 class="my-0 fw-bold text-center text-white">Quienes somos</h4>
              </div>
              <div class="card-body">
                  
                    <img src={quienes} class="img-fluid" alt="" />
                    <div> Somos la mejor universidad con el mejor campus de todo Medellin</div>
                    
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3 bg-danger">
                <h4 class="my-0 fw-bold text-center text-white">Gimnasio Udem</h4>
              </div>
              <div class="card-body">
                
                    <img src={imagen} class="img-fluid" alt="" />
                    <div> 
                      <h1 className="Titulor"> Reglamento</h1>
                      <div>-Acceder el lugar con la implementación adecuada (ropa,toalla personal y hidratación.</div>
                        <div>-Cuidar y tener un buen uso de los implementos del gimnasio.</div>
                        <div>-Atender los llamados de los entrenadores  del gimnasio.</div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cerrar;
