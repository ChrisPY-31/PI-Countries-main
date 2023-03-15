import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navegation.css";
import { useDispatch } from "react-redux";
import { getConfigure } from "../../store/reducer/countries";
import { AiOutlineBars  , AiOutlineClose} from "react-icons/ai";

const Navegation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);
  const handleDesactive=()=>{
    setBurger(!burger)
  }

  const handleMoreConfigure = () =>{
    dispatch(getConfigure())
    setBurger(!burger)

  }
  return (
    <header className="nav">
      <nav className="nav__container">
        <h1 className="nav__logo" onClick={() => navigate("/home")}>
          Countries
        </h1>
        <ul className="nav__ul">
          <li className="nav__li">
            <Link className="nav__link" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/createActivity"}>
              Create Activity
            </Link>
          </li>
          <li className="nav__li">
            <Link
              className="nav__link"
              onClick={() => dispatch(getConfigure())}
            >
              More Configure
            </Link>
          </li>
        </ul>
        <AiOutlineBars
          className="nav__burger"
          onClick={() => setBurger(!burger)}
        />

        {burger && (
          <div className="nav__navigate">
            <AiOutlineClose
              className="nav__burger--flex"
              onClick={() => setBurger(!burger)}
            />
            <ul className="nav__twoUl">
              <li className="nav__li">
                <Link className="nav__link" to={"/home"} onClick={handleDesactive}>
                  Home
                </Link>
              </li>
              <li className="nav__li">
                <Link className="nav__link" to={"/createActivity"} onClick={handleDesactive}>
                  Create Activity
                </Link>
              </li>
              <li className="nav__li">
                <Link
                  className="nav__link"
                  onClick={handleMoreConfigure}
                >
                  More Configure
                </Link>
              </li>
              <li>
              <Link className="nav__link" to={"about"} onClick={handleDesactive}>
                  About me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export { Navegation };
