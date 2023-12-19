const appConfig = require('../../../config/app')

function errorHandler(err, req, res, next) {
  if (!err) next()
  const code = err.statusCode || 500
  const message = `${messageCode[code]}: ${err.message}`

  if (appConfig.debug) console.log('Error: ', err);
  
  return res.render('errorAplication', { layout: false, message })
}

const messageCode = {
  500: 'Error Interno',
  400: 'Error en la solicitud',
  401: 'Error de auntenticación',
  403: 'Error de autorización',
  422: 'Error de validación',
}

module.exports = errorHandler