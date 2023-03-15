import { useState, useEffect } from "react";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { createActivity, getAllActivityBD } from "../../store/reducer/thunk";
import Spiner from "../Spinner/Spiner";
import Error from "../Error/Error";
import { getSuccess } from "../../store/reducer/countries";

const Detail = () => {
  const { allCountries , success } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    name: "",
    cca3: "",
    dificulty: "",
    duration: "",
    temporada: "",
  });

  useEffect(() => {
    setTimeout(() => {
      if (form) {
        if (
          [
            input.name,
            input.dificulty,
            input.duration,
            input.temporada,
          ].includes("")
        ) {
          setError(true);
          setForm(false);
        } else {
          dispatch(createActivity(input));
          dispatch(getSuccess());
          dispatch(getAllActivityBD())
          setForm(false);
          setError(true);
        }
      }
    }, 3000);
  }, [form]);
  
  useEffect(() => {
    setTimeout(() => {
      if (error ) {
        setError(false);
      }
    }, 2000);

  }, [error]);

  useEffect(() =>{
    setTimeout(()=>{
      if(success){
        dispatch(getSuccess())
      }
    },2000)
  },[success])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(true);
    
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  

  return (
    <div className="form">
      {form && <Spiner />}
      {error && <Error />}
      <form action="" className="form__container" onSubmit={handleSubmit}>
        <h2 className="form__country">CREATE COUNTRY</h2>
        <div className="form__flex">
          <label className="form__label" placeholder="Enter the Name">
            name
          </label>
          <input
            type="text"
            name="name"
            className="form__input"
            autoFocus
            onChange={handleChange}
          />

          <label className="form__label" placeholder="Enter the Country">
            Choose Country
          </label>
          <select
            name="cca3"
            id=""
            className="form__input"
            onChange={handleChange}
          >
            <option >Seleciona el pais</option>
            {allCountries.map((country) => {
              return <option key={country.cca3}value={country.cca3}>{country.name}</option>;
            })}
          </select>
          <label className="form__label" placeholder="Enter the Difuculty">
            Dificulty
          </label>
          <input
            type="range"
            name="dificulty"
            min="1"
            max="5"
            step="1"
            className="form__input"
            onChange={handleChange}
          />

          <label className="form__label" placeholder="Enter the Duration">
            Duration
          </label>
          <input
            type="number"
            name="duration"
            min="1"
            max="5"
            step="1"
            className="form__input"
            onChange={handleChange}
          />

          <label className="form__label" placeholder="Enter the Season">
            season
          </label>
          <select
            name="temporada"
            className="form__input"
            onChange={handleChange}
          >
            <option>Selecciona</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
          <button className="form__btn">Create Activity</button>
        </div>
      </form>
    </div>
  );
};

export { Detail };
