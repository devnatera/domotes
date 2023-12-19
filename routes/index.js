const express = require('express')
const router = express.Router()
const appConfig = require('../config/app')

router.get('/', 
  (req, res) => res.status(200).render(
  'home', { layout: false, port: appConfig.port }
  )
)

const routes = (server) => {
  server.use('', router)
}

module.exports = routes