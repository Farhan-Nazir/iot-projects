let isLed = "On";
function ledStatus(socket) {
  socket.emit("Outgoing Led", isLed);
}
module.exports = ledStatus;
