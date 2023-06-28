// Modules and Globals
const express = require('express')
const app = express()
const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config()

// Express Settings
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.get('/', (req, res) => {
  res.render('home')
})

// Error 404 page
app.get('*', (req, res) => {
  res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)