
const path = require('path');
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const handlebars = require('express-handlebars')
const routes = require('./routes')


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(morgan('combined'))

//Temple engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route
routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})