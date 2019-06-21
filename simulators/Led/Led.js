
function blinkLed(socket) {
  let isLed = false;
  setInterval(() => {
   
    if (isLed) {
      isLed = false;
    } else {
      isLed = true;
    }
socket.emit("Outgoing Led", isLed)
console.log(isLed);
  }, 2000);
}

module.exports = blinkLed;
