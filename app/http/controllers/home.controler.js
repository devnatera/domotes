const { logIn } = require('../../modules/sophosFirewall/aplication/auth.service')

async function index(req, res, next) {
  try {
    
    const response = await logIn()
    if (response instanceof Error) throw response

    const auth = {status: response || 'Authentication Unsuccessful'}
    return res.status(200).render(
      'home', { layout: false, auth }
    )
  } catch (error) {
    next(error)
  }
}

module.exports = {
  index
}