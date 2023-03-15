import axios from "axios";
import {
  getAllCountries,
  getAscDesc,
  getSearch,
  getAllCountriesID,
  activityCountri,
  getActivityBd,
  getdeleteActivity,
} from "./countries";

export const getCountries = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/countries");
    dispatch(getAllCountries(data.countrys));
    dispatch(getSearch(data.countrys));
  };
};
export const getCountry = (name) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3001/countries/${name}`);
    dispatch(getAscDesc(data.country));
  };
};

export const getCountryID = (name) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3001/countries/${name}`);
    dispatch(getAllCountriesID(data));
  };
};
export const createActivity = (form) => {
  return async (dispatch, getState) => {
    await axios.post(`http://localhost:3001/activities`, form);
    
  };
};
export const getAllActivity = (activity) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      `http://localhost:3001/activities?name=${activity}`
    );
    const Acti = data.getActivity.map((acty) => {
      const Activities = [{
        id: acty.id,
        name: acty.name,
        dificulty: acty.dificulty,
        duration: acty.duration,
        temporada: acty.temporada,
      }];
      
      const countries = acty.Countries.map((country) => {
        const newObj = {
          cca3: country.cca3,
          name: country.name,
          image: country.image,
          continente: country.continente,
          capital: country.capital,
          subregion: country.subregion,
          area: country.area,
          region: country.region,
          poblation: country.poblation,
          ...[Activities],
        };
        return newObj
      });
      return countries
    });
    const result = Acti.map(el => {
      for(let i = 0 ; i<el.length;i++){
        return el[i]
      }
    })
    dispatch(activityCountri(result))
    
  };
};

export const getAllActivityBD =() =>{
  return async (dispatch, getState) => {
  const {data} = await axios.get(`http://localhost:3001/activities`)
  dispatch(getActivityBd(data.getActivity)) 
  
 
}
}

export const deleteActivity = (id) =>{
  console.log(id)
  return async ( dispatch , getState) =>{
    const {data} = await axios.delete(`http://localhost:3001/activities/${id}`)
    dispatch(getdeleteActivity(id))
  }
}