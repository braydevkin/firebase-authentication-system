const express = require('express')

const routes = express.Router()

const authenticationController = require('./controllers/authentication')

routes.post('/register', authenticationController.store)
routes.post('/login', authenticationController.login)

module.exports = routes