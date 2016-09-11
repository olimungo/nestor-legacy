var ds = require('ds18x20');
var log4js = require('log4js');
var firebase = require('firebase');

var FREQUENCY = 30000;
var logger = configureLogger();
var temperaturesRef = configureRemoteDatabase();

ds.isDriverLoaded(function (err, isLoaded) {
  getSensor(function (sensor) {
    watchTemp(sensor);
  });
});

function getSensor(callback) {
  ds.list(function (err, listOfDeviceIds) {
    callback(listOfDeviceIds[0]);
  });
}

function watchTemp(sensor) {
  console.log('Started sampling temperature at ' + FREQUENCY + 'ms');
  logger.info('Started sampling at ' + FREQUENCY + 'ms');
  
  setInterval(function () {
    ds.get(sensor, function (err, temperature) {
      saveTemperature(temperature);
    });
  }, FREQUENCY);
}

function configureLogger() {
  log4js.configure({
    appenders: [
      { type: 'file', filename: '/home/pi/Projects/nestor/back-end/logs/temperature.log', category: 'temperature' }
    ]});

  return log4js.getLogger('temperature');
}

function configureRemoteDatabase() {
  var config = {
      apiKey: "AIzaSyCBonQJo0Ok9E6vjjSDhiBXyQxaDUHFp-Q",
      authDomain: "nestor-b00e3.firebaseapp.com",
      databaseURL: "https://nestor-b00e3.firebaseio.com",
      storageBucket: "nestor-b00e3.appspot.com",
    };

  var app = firebase.initializeApp(config);

  return firebase.database().ref('/temperatures');
}

function retrieveTemperatures() {
  temperaturesRef.once('value', function(data) {
    console.log(data.val());
  }, function (error) {
    console.log("Retrive failed: " + error.code);
  });  
}

function saveTemperature(temperature) { 
  var sample = temperaturesRef.push(),
      now = new Date();

  sample.set({
    date: now.getTime(),
    dateFormatted: formatDate(now),
    temperature: temperature
  });

  logger.info('Sampled: ' + temperature);
}

function formatDate(date) {
  var year = date.getFullYear(),
      month = format2Digits(date.getMonth()+1),
      day = format2Digits(date.getDate()),
      hours = format2Digits(date.getHours()),
      minutes = format2Digits(date.getMinutes()),
      seconds = format2Digits(date.getSeconds());

  return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}

function format2Digits(num) {
  return ('00' + num).substr(-2, 2);
}