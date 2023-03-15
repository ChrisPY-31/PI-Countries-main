import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Pagination.css";

const Pagination = ({ setFirstCountry, firstCountry, allCountries }) => {
  let arrayButton = [];
  for (let i = 1; i <= 28; i++) {
    arrayButton.push(i);
  }

  const handleClickNext = () =>{
    if(firstCountry < 28  ){
       setFirstCountry(firstCountry + 1)
    }
  }
  const handleClickAfter = () =>{
    if(firstCountry > 1){
      setFirstCountry(firstCountry - 1)
    }
  }

  return (
    <div className="pagination">
      <AiOutlineArrowLeft
        className="pagination__left"
        onClick={handleClickAfter}
      />

      <AiOutlineArrowRight
        className="pagination__right"
        onClick={handleClickNext}
      />
    </div>
  );
};

export { Pagination };
