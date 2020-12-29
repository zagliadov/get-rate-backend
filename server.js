const express = require('express');
const rp = require('request-promise');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();
const port = 3333;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.get('/api/rates', (req, res, next) => {
    rp(options)
    .then(function (repos) {
        return res.json(repos);
    })
    .catch(function (err) {
        // API call failed...
        console.log('Error', err);
        return res.status(500).send('Error')
    });
});

app.get('/api/rates/:code', (req, res, next) => {
    const { code } = req.params;

    rp(options)
    .then(function (rates) {
        const rateResult = _.find(rates, function (rate) {
            return rate.cc === code;
        })
        return res.json(rateResult);
    })
    .catch(function (err) {
        // API call failed...
        console.log('Error', err);
        return res.status(500).send('Error')
    });
});

app.post('/api/rates', (req, res) => {
    console.log(req.body); // тут будут данные из post
    const { rate } = req.body; // а вот так можно получить красиво rate из объекта req.body
    return res.sendStatus(200);
})

app.listen(port, () => {
    console.log('Server is running');
});