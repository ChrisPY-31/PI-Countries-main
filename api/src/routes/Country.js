const mainCountry = require('express').Router()
const { getAllCoutry , CountrysById } = require('../controllers/CountryControllers')
const { countryDescending , countryAscendente , continentAsi , continentAfricano , continentSoutAmerica ,continentNorthAmerica, continentEuropeo , continentOceania,
    continentAntartica } = require('../controllers/FilterControllers')

mainCountry.get('/desc' , countryDescending)
mainCountry.get('/asc' , countryAscendente)
mainCountry.get('/africa' , continentAfricano)
mainCountry.get('/asia' , continentAsi)
mainCountry.get('/samerica', continentSoutAmerica)
mainCountry.get('/namerica', continentNorthAmerica)
mainCountry.get('/oceania', continentOceania)
mainCountry.get('/europa', continentEuropeo)



mainCountry.get('/antartica' , continentAntartica)


mainCountry.get('/' , getAllCoutry)
mainCountry.get('/:id' , CountrysById)

module.exports = mainCountry