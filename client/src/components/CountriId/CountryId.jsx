import React from "react";
import "./CountryId.css";
import { useSelector } from "react-redux";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { CountryIdCard } from "../CountryIdCard/CountryIdCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CountryId = ({ imageInfo }) => {
  const { allCountriesID } = useSelector((state) => state.countries);
  const navigate = useNavigate()

  const Country = styled.div`
    background-image:linear-gradient(0deg, rgba(0,0,0 ,0.3),rgba(0,0,0 ,0.3)), url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    border-radius: 2rem;
    

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background-color: rgba(0,0,0,0.1); // establece la opacidad de la imagen
      z-index: 1; // establece la posición en el eje z
    }

    & > div {
      position: relative;
      z-index: 2; // establece la posición en el eje z
    }


  `;
  return (
    <Country imageUrl={imageInfo} className="countryid">
      <div className="countryid__container">
        {allCountriesID.map((country) => (
          <div className="countryid__pais">
            <CountryIdCard
              image={country.image}
              name={country.name}
              capital={country.capital}
              continent={country.continente}
              poblation={country.poblation}
              area={country.area}
              region={country.region}
            />
            <div className="countryid__ActivityMap">
              <h2>Country Activity</h2>
              {country.Activities.length === 0?<h1>No hay actividades creadas</h1>:country.Activities.map((acty) => (
                <ActivityCard
                  name={acty.name}
                  dificulty={acty.dificulty}
                  duration={acty.duration}
                  temporada={acty.temporada}
                  id={acty.id}
                />
              ))}
              <button onClick={()=> navigate('/createActivity')} className="countryid__button">Create Activity</button>
            </div>
          </div>
        ))}
      </div>
    </Country>
  );
};

export { CountryId };
