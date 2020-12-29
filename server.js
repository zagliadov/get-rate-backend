const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const rates = [

];

var options = {
    uri: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        repos.forEach(item => {
            rates.push(item)
        });
        app.get('/getRates', (req, res, next) => {
            res.json(rates);
        });

        app.post('/', (req, res, next) => {
            const body = req.body;
            const {text} = req.body;
            console.log(text)
           
            res.send(body)
        });
    })
    .catch(function (err) {
        // API call failed...
        console.log('Error');
    });






app.listen(port, () => {
    console.log('Server is running');
});