const express = require('express')
const { getWeatherByCity, getWeatherByCoordinates } = require('../controllers/weatherController')

const router = express.Router()

router.get('/weather', getWeatherByCity)
router.get('/weather/coordinates', getWeatherByCoordinates)

module.exports = router
