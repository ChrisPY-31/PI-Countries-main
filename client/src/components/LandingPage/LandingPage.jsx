import React, { useEffect } from "react";
import "./LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNavigate } from "../../store/reducer/countries";
import { Loadding } from "../Loadding/Loadding";

const LandingPage = () => {
  const [landing, setLanding] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (landing) {
      setTimeout(() => {
        setLanding(false);
        navigate("/home");
        dispatch(getNavigate());
      }, 3000);
    }
  }, [landing]);
  if (landing) {
    return <Loadding />;
  }
  return (
    <div className="landing">
      <div className="landing__image">
        <h1 className="landing__h1">Countries</h1>
        <button className="landing__button" onClick={() => setLanding(true)}>
          CONTINUAR
        </button>
      </div>
    </div>
  );
};

export { LandingPage };
