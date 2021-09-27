const express = require('express')
const router = require('express-promise-router')()

const filmController = require('../controllers/FilmController')




router.post('/newfilm', filmController.newFilm)
router.post('/newcategory', filmController.newCategory)

module.exports = router