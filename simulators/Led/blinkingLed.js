const WPI  = require("wiring-pi");

const LEDPin = 4;

function blinkLED(socket) {
  // Light up LED for 500 ms
  // set up wiring
WPI.setup("wpi");
WPI.pinMode(LEDPin, WPI.OUTPUT);
  let state = 0;

  WPI.digitalWrite(LEDPin, 1);
  setInterval(function() {
    if (state === 0) {
      state = 1;
      WPI.digitalWrite(LEDPin, state);
    } else {
      state = 0;
      WPI.digitalWrite(LEDPin, state);
    }

    socket.emit("Outgoing Led", state)
  }, 500);
}


module.exports = blinkLED;
