const { Country , Activity} = require('../db')

const countryDescending =  async (req , res) =>{
        const country = await Country.findAll({
        order:[['name', 'DESC']]
    })
    res.status(200).json({country})
    
   
}

const countryAscendente = async (req , res ,next) =>{
    try {
        const country = await Country.findAll({
            order:[['name', 'ASC']]
        })
        res.status(200).json({country})    
    } catch (error) {
        next(error)
    }
}

const continentAsi = async ( req , res , next) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'Asia'},
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}

const continentAfricano = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'Africa'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}

const continentSoutAmerica = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'South America'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}
const continentNorthAmerica = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'North America'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}
const continentEuropeo = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'Europe'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}

const continentOceania = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'Oceania'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}

const continentAntartica = async ( req , res , next ) =>{
    try {
        const country = await Country.findAll({
            where:{continente:'Antarctica'}
        })
        res.status(200).json({country})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    countryDescending,
    countryAscendente,
    continentAsi,
    continentAfricano,
    continentSoutAmerica,
    continentNorthAmerica,
    continentEuropeo,
    continentOceania,
    continentAntartica
    
}