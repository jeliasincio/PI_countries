import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filteredCountryByType,
  filterByOrder,
  filterByPopulation,
  filterActivity,
  getActivities,
  postActivity,
  filterByArea,
} from "../actions/index";

import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const AllCountries = useSelector((state) => state.Countries);
  const allActivities = useSelector((state) => state.Activities);
  const [activities, setActivities] = useState("");
  const [ordenado, setOrdenado] = useState("");
  // const [orderPopulation, setOrderPopulation] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  let [countriesPerPage, setCountriesPerPage] = useState(12);
  const indexOfLastCountry = currentPage * countriesPerPage;
  // const indexOfLastCountry = currentPage * (currentPage === 1 ? countriesPerPage=9 :countriesPerPage)
  const indexOfFirstCouontry = indexOfLastCountry - countriesPerPage;
  const currentCountry = AllCountries.slice(
    indexOfFirstCouontry,
    indexOfLastCountry
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  // const handleUpdate = (e) =>{
  //     e.preventDefault()
  //     dispatch(getCountries())
  // }

  function handleFilteredByType(e) {
    e.preventDefault();
    dispatch(filteredCountryByType(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterActivity(e.target.value));
  }

  function handleFilterByPopulation(e) {
    e.preventDefault();
    dispatch(filterByPopulation(e.target.value));
    setCurrentPage(1);
    setOrdenado(`ordenado ${e.target.value}`);
  }

  function handleFilterByName(e) {
    console.log(e.target.value);
    e.preventDefault();
    dispatch(filterByOrder(e.target.value));
    setActivities(`ordenado ${e.target.value}`);
  }

  function handleFilterByArea(e) {
    e.preventDefault();
    dispatch(filterByArea(e.target.value));
    setCurrentPage(1);
    setOrdenado(`ordenado ${e.target.value}`);
  }

  function handleClick(ev) {
    ev.preventDefault();
    dispatch(getCountries());
    window.location.reload();
  }

  // function filter_Subregion(e){
  //     e.preventDefault()
  //     dispatch(filter_Subregion(e.target.value))
  // }

  return (
    <div className="home">
      <SearchBar page={setCurrentPage} />

      <div className="orders">
        <select className="section" onClick={(e) => handleFilteredByType(e)}>
          <option value={"all"}>CONTINENTE</option>
          <option value={"all"}>Todos Los Continentes</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europa</option>
          <option value={"North America"}>North America</option>
          <option value={"South America"}>South America</option>
          <option value={"Oceania"}>Oceania</option>
        </select>

        <select
          className="section"
          onClick={(e) => handleFilterByPopulation(e)}
        >
          <option>POBLACION</option>
          <option value={"Asc"}>Ascedente</option>
          <option value={"Desc"}>Descendente</option>
        </select>

        <select className="section" onClick={(e) => handleFilterByName(e)}>
          <option>ORDEN</option>
          <option value={"Asc"}>Ascedente</option>
          <option value={"Desc"}>Descendente</option>
        </select>

        <select className="section" onChange={(e) => handleFilterCreated(e)}>
          <option value="" disabled selected hidden>
            ACTIVIDAD
          </option>
          {allActivities &&
            allActivities.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>

        <select className="section" onClick={(e) => handleFilterByArea(e)}>
          <option>AREA</option>
          <option value={"Asc"}>Ascedente</option>
          <option value={"Desc"}>Descendente</option>
        </select>

        <div>
          <button onClick={(ev) => {
              handleClick(ev);
            }} className="bfiltro">
            Actualizar
          </button>
        </div>
      </div>

      <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={AllCountries.length}
        paginado={paginado}
      />

      <div className="cards">
        {currentCountry &&
          currentCountry.map((e) => {
            return (
              <Card
                key={e.id}
                flag={e.flag}
                name={e.name}
                id={e.id}
                continent={e.continent}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
