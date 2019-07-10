let GPIO = require('onoff').Gpio;
let pin5 = new GPIO(5, 'in');

if(pin5.watch((data) => {
    return data
}),1);
