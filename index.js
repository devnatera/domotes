const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { engine } = require('express-handlebars')
const appConfig = require('./config/app')
const router = require('./routes')

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(cors({
    origin: '*',
    exposedHeaders: ['Content-Type', 'Accept', 'Authorization']
}))

router(app)

app.listen(appConfig.port, () => {
    console.log(`api-marfil-reportes listening on port ${appConfig.port}!`)
})