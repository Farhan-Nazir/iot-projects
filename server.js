const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const Led = require("./simulators/Led/Led");
const LedOnOff = require("./simulators/Led/ledOnOff");
const Speedometer = require("./simulators/Speedometer/speedometer");
const BlinkingLed = require("./raspiModules/Led/blinkingLed");
//let socket = require("socket.io-client")("http://localhost:5000");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
io.on("connection", socket => {
  console.log("New connection !!!", socket.id);
  /* Simulators */
  socket.on("OnOff", state => {
    LedOnOff(state);
  });
  Speedometer(socket);

  // Led(socket);

  /* end simulators */

  // BlinkingLed.startBlink(socket);
  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => {
    // BlinkingLed.stopBlink();
    console.log("Client disconnected");
  });
});
server.listen(PORT, () => console.log("Connected @ " + PORT));
