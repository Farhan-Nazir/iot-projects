
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

console.log("Led is started")


function blinkLED(socket){
   let state = 0;
setInterval(() => {
 
  if (LED.readSync() === state) { //check the pin state, if the state is 0 (or off)
    LED.writeSync(1);
    state = 1; //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0);
    state = 0 //set pin state to 0 (turn LED off)
  }

      console.log(state)
socket.emit("Outgoing Led", state)
}, 2000); //run the blinkLED function every 250ms

}

function endBlink() { //function to stop blinking
console.log("Led is stop now")
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

 //stop blinking after 5 seconds

// const WPI  = require("wiring-pi");

// const LEDPin = 4;

// function blinkLED(socket) {
//   // Light up LED for 500 ms
//   // set up wiring
//   console.log("Starting Blinking Led")
// WPI.setup("wpi");
// WPI.pinMode(LEDPin, WPI.OUTPUT);
//   let state = 0;

//   WPI.digitalWrite(LEDPin, 1);
//   setInterval(function() {
//     if (state === 0) {
//       state = 1;
//       WPI.digitalWrite(LEDPin, state);
//     } else {
//       state = 0;
//       WPI.digitalWrite(LEDPin, state);
//     }

//     socket.emit("Outgoing Led", state)
//   }, 500);
// }


module.exports = blinkLED;
