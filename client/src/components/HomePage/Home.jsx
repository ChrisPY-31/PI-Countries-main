import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivityBD, getCountries } from "../../store/reducer/thunk";
import { CountryCard } from "../CountryCard/CountryCard";
import { Footer } from "../Footer/Footer";
import { MoreConfigure } from "../MoreConfigure/MoreConfigure";
import { Pagination } from "../Pagination/Pagination";
import "./Home.css";

const Home = ({ setImageInfo }) => {
  const dispatch = useDispatch();
  const { allCountries, moreConfigure } = useSelector(
    (state) => state.countries
  );

  const [firstCountry, setFirstCountry] = useState(1);
  const [lastCountry, setLastCountry] = useState(9);
  const response = firstCountry * lastCountry;
  const response1 = response - lastCountry;
  const countries = allCountries.slice(response1, response);
  console.log(firstCountry)

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllActivityBD())
  }, []);
  return (
    <section className="home">
      <div className="home__container">
        <Pagination
          setFirstCountry={setFirstCountry}
          firstCountry={firstCountry}
          allCountries={allCountries}
        />
        {moreConfigure && <MoreConfigure />}
        <div className="home__card">
          {countries.map((country) => (
            <CountryCard
              key={country.cca3}
              cca3={country.cca3}
              image={country.image}
              name={country.name}
              continent={country.continente}
              setImageInfo={setImageInfo}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export { Home };
