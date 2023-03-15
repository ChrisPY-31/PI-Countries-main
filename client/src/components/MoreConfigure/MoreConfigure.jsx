
import "./More.css";
import { useDispatch , useSelector} from "react-redux";
import { getAllActivity, getCountries, getCountry } from "../../store/reducer/thunk";
import { getAllSearch, getCountryAsc  } from "../../store/reducer/countries";

const MoreConfigure = () => {
  const dispatch = useDispatch();
  const {nameActivity} = useSelector(state => state.countries)

  return (
    <div className="more">
      <div className="more__container">
        <select
          name=""
          id=""
          onChange={(e) => dispatch(getCountry(e.target.value))}
        >
          <option>Order</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <select
          name=""
          id=""
          onChange={(e) => dispatch(getCountryAsc(e.target.value))}
        >
          <option>Poblacion</option>
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
        <select onChange={(e) =>dispatch(getAllActivity(e.target.value))}>
          <option>Actividad Turistica</option>
          {nameActivity.map((name)=>(
            <option value={name.name}>{name.name}</option>
          ))}
        </select>
        <select onChange={(e) => dispatch(getCountry(e.target.value))}>
          <option>Continent</option>
          <option value="samerica">South America</option>
          <option value="namerica">North America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europa">Europa</option>
          <option value="oceania">Oceania</option>
          <option value="antartica">Antartica</option>
        </select>
      </div>
      <form action="" className="more__form">
        <input
          type="text"
          onChange={(e) => dispatch(getAllSearch(e.target.value))}
          placeholder="Country Name"
        />
      </form>
      <div className="more__center">
        <button className="more__delete" onClick={()=>dispatch(getCountries())}>Delete filtros</button>
      </div>
    </div>
  );
};

export { MoreConfigure };
