import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryId } from "../actions/index";
import "./Detail.css";
import NavBar from "./NavBar";

function Detail(props) {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryId(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const country = useSelector((state) => state.Detail);

  if (loading === true) {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    return (
      <div class="loading show">
        <div class="spin"></div>
      </div>
    );
  } else if (loading === false) {
    return (
      <React.Fragment>
        <NavBar></NavBar>

        <div className="country-detail">
          {country ? (
            <div className="country-info">
              <img className="img-detail" src={country.flag} alt="country" />
              <div className="description-detail">
                <h1>{country.name}</h1>
                <h3>ID : {country.id}</h3>
                <h3>Capital : {country.capital}</h3>
                <h3>Poblacion : {country.population}</h3>
                <h3>Area : {country.area}</h3>
                <h3>SubRegion : {country.subregion}</h3>
              </div>
            </div>
          ) : (
            <p> Cargando... Espere un momento</p>
          )}
        </div>
        <div>
          {country.activities ? (
            country.activities.map((item) => (
              <div className="detail-activities">
                <h2 className="titulo">Actividad</h2>
                <h4 className="title">Nombre: {item.name}</h4>
                <h4 className="title">Dificultad: {item.difficulty}</h4>
                <h4 className="title">Duracion: {item.duration}</h4>
                <h4 className="title">Season :{item.season}</h4>
              </div>
            ))
          ) : (
            <p>'Todavia No Hay Actividades Por Mostrar'</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
