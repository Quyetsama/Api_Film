const express = require('express')
const router = require('express-promise-router')()

const filmController = require('../controllers/FilmController')




router.get('/', filmController.getFilms)
router.get('/categories', filmController.getCategories)


module.exports = router