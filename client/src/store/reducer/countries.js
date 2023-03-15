import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    allCountries:[],
    allCountriesID:[],
    countrySearch:[],
    nameActivity:[],
    Landing:false,
    navigate:false,
    moreConfigure:false,
    success:false
    
}
export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        getAllCountries: (state,  action  ) => {
            state.allCountries = action.payload
        },
        getLanding : (state ) =>{
            state.Landing = !state.Landing
        },
        getNavigate : (state) =>{
            state.navigate = !state.navigate
        },
        getConfigure : (state) =>{
            state.moreConfigure = !state.moreConfigure
        },
        getAscDesc : (state , action) =>{
            state.allCountries = action.payload
        },
        getSearch: (state , action)=>{
            state.countrySearch = action.payload
        },
        getAllSearch:(state, action)=>{
            const searctCountry = state.countrySearch.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.allCountries = searctCountry
        },
        getAllCountriesID : (state, action)=>{
            state.allCountriesID = action.payload
        },
        getCountryAsc: (state , action)=>{
            if (action.payload === "menor") {
                state.allCountries = state.allCountries.sort((a, b) =>
                  a.poblation > b.poblation ? 1 : -1
                );
              }
              if (action.payload === "mayor") {
                state.allCountries = state.allCountries.sort((a, b) =>
                  a.poblation > b.poblation ? -1 : 1
                );
              }
        },

        getSuccess:(state) =>{
            state.success = !state.success
        },
        activityCountri: (state , action)=>{
            console.log(action.payload)
            state.allCountries = action.payload
        },
        getActivityBd: (state ,action) =>{
            const noRepit = [];
            for (const Activity of action.payload) {
              if (!noRepit.some(repet => repet.name === Activity.name)) {
                noRepit.push(Activity);
              }
            }
            state.nameActivity = noRepit;
            
        },
        getdeleteActivity:(state , action) =>{
            
            
        
        }
    }
});


// Action creators are generated for each case reducer function
export const { getAllCountries , getLanding  , getNavigate , getConfigure , getAscDesc, getSearch , getAllSearch , getAllCountriesID , getCountryAsc , getSuccess ,activityCountri,getActivityBd ,getdeleteActivity} = countriesSlice.actions;