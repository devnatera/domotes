const express = require('express')
const router = express.Router()
const homeRouter = require('./home.router')

const routes = (server) => {
  server.use('', homeRouter)
}

module.exports = routes