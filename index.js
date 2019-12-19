const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.request');

const app = express();
// 8dc41ecd6844060483c042875ced6e05

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req, res) => {
    res.render('index');
});

app.post('/',(req, res) => {
    const { city } = req.body;
    weatherRequest(city);
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
});