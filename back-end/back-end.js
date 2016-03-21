var express = require('express');
var app = express();

var currentTemperature = 22,
    targetTemperature = currentTemperature;

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.route('/temperature/current/get')
  .get(function (req, res) {
    res.json({ value: currentTemperature });
  }
);

app.route('/temperature/target/set/:value')
  .get(function (req, res) {
    targetTemperature = Number(req.params.value);
    res.json({ result: 'Target temperature updated to ' + targetTemperature });
  }
);

app.route('/temperature/target/get')
  .get(function (req, res) {
    res.json({ value: targetTemperature });
  }
);

app.listen(3000, function () {
  console.log('MESSAGE - Listening on port 3000');
});