var os = require('os');
var express = require('express');
var app = express();

var currentTemperature = 22,
    targetTemperature = currentTemperature;
    
function getIp() {
console.log('XXXX');
  var interfaces = os.networkInterfaces(),
      adresses = null,
      ipV4 = 'localhost';
  
  if (interfaces.hasOwnProperty('wlan0')) {
    adresses = interfaces['wlan0'];
  }
  
  if (adresses) {
    ipV4 = adresses.filter(function (address) {
      return address.family === 'IPv4';
    })[0].address;
  }
  
console.log('ZZZZZZZ', ipV4);
  return ipV4;
}

getIp();

// Add headers
app.use(function (req, res, next) {
console.log('AAAAAA');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://' + getIp() + ':8080');

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

app.route('/light/on')
  .get(function (req, res) {
    switchLight(1);
    res.json({ message: 'Light turned on' });
  }
);

app.route('/light/off')
  .get(function (req, res) {
    switchLight(0);
    res.json({ message: 'Light turned off' });
  }
);

app.listen(3000, function () {
  console.log('MESSAGE - Listening on port 3000');
});

function switchLight(value) {
  var Gpio = require('onoff').Gpio,
      led = new Gpio(4, 'out');

  led.writeSync(value);
}
