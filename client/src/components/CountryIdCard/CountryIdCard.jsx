import React from "react";
import "./CountryIdCard.css";

const CountryIdCard = ({
  image,
  name,
  capital,
  continent,
  poblation,
  region,
  area
}) => {
  return (
    <section className="countryId">
      <h2 className="countryId__name">{name}</h2>
      <div className="countryId__Container">
        <div>
          <img className="countryId__image" src={image} alt="" />
        </div>
        <div className="countryId__flex">
          <h3 className="countryId__capital">Capital: <span>{capital}</span></h3>
          <h3 className="countryId__continent">Continent: <span>{continent}</span></h3>
          <h3 className="countryId__poblation">Poblation: <span>{poblation}</span> Habs</h3>
          <h3>Area <span>{area}</span></h3>
          <h4 className="countryId__region">Region: <span>{region}</span></h4>
        </div>
      </div>
    </section>
  );
};

export { CountryIdCard };
