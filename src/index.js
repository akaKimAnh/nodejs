
const path = require('path');
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const handlebars = require('express-handlebars')

app.use(morgan('combined'))

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})