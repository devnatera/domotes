const express = require('express')
const controller = require('../app/http/controllers/home.controler')
const router = express.Router()

router.get('/',
  async (req, res, next) => {
    return await controller.index(req, res, next)
  }
)

module.exports = router