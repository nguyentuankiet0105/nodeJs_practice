const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000

//template engine
app.engine('hbs', handlebars.engine({
 extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'))

console.log(__dirname);

app.get('/', (req, res) => {
 res.render('home')
})
app.get('/news', (req, res) => {
 res.render('news')
})

app.listen(port)