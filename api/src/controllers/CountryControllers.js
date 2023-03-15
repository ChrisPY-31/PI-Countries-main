const { Country , Activity} = require('../db')

const getAllCoutry = async(req , res , next) =>{
    try {
        const { name } =req.query
        if(name){
            console.log(name)
            try {
                let nameClient = name.toLowerCase()
                const countryName = await Country.findAll({
                    where:{
                        name:nameClient
                    },
                    include:Activity, 
                })
                res.status(200).json({countryName})
                
            } catch (error) {
                next(error)
            }
        }
        const countrys = await Country.findAll({
            include:Activity,
        })
        res.status(200).json({countrys})
        
    } catch (error) {
        next(error)
    }
}

const CountrysById = async( req , res , next) =>{
    try {
        const {id} = req.params
        if(id.length === 3){

            let idd = id.toUpperCase()
            const getApiId = await Country.findAll({
                where:{
                    cca3:idd
                },
                include:Activity
            })            
            return res.status(200).json(getApiId)
        }
        res.status(404).json({error:'esta mal'})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCoutry,
    CountrysById,
    
}
























// const axios = require('axios')

// const api = (apiCountry) =>{
//     return apiCountry.map(country =>{
//         return {
//             id:country.cca3,
//             name:country.name.common,
//             image:country.flags[1],
//             continent:country.continents[0],
//             capital:country.capital,
//             subregion:country.subregion,
//             area:country.area,
//             region:country.region,
//             poblation:country.population,

//         }
//     })
// }
// const getApyCountry = async() =>{
//     const getApi = (await axios.get('https://restcountries.com/v3/all')).data
//     return  getApi.map(country =>{
//         return {
//             id:country.cca3,
//             name:country.name.common,
//             image:country.flags[1],
//             continent:country.continents[0],
//             capital:country.capital,
//             subregion:country.subregion,
//             area:country.area,
//             region:country.region,
//             poblation:country.population

//         }
//     })
    
// }

// const getCountryName = async (name) =>{
//     console.log(name)
//     const getApi = (await axios.get('https://restcountries.com/v3/all')).data
//     const country = api(getApi)
//     return country.filter(pais => pais.name.toLowerCase().includes(name.toLowerCase())) 

// }

// const getCountrysById = async(id) =>{
//     const getApi = (await axios.get(`https://restcountries.com/v3/all`)).data
//     const countryId = await api(getApi)
//     return  countryId.filter(country => country.id.toLowerCase() === id.toLowerCase() ) 
    
// }

// module.exports = {
//     getApyCountry,
//     getCountryName,
//     getCountrysById
// }