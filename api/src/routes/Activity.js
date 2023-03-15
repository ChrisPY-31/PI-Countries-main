const mainActivity = require('express').Router()
const {createActivity, getAllActivity , deleteActivity} = require('../controllers/ActivityControllers')

mainActivity.post('/', createActivity)
mainActivity.get('/', getAllActivity)
mainActivity.delete('/:id' ,deleteActivity)

module.exports = mainActivity