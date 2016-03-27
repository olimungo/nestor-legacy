var ds = require('ds18x20');

ds.isDriverLoaded(function (err, isLoaded) {
  console.log(isLoaded);

  getSensor(function(sensor) {
     watchTemp(sensor);
  });
});

function getSensor(callback) {
  ds.list(function (err, listOfDeviceIds) {
    callback(listOfDeviceIds[0]);
  });
}

function watchTemp(sensor) {
  setInterval(function(){
    ds.get(sensor, function (err, temp) {
      console.log(temp);
    });
  }, 1000);
}
