var Gpio = require('onoff').Gpio,
    led = new Gpio(4, 'out');

led.writeSync(0);
