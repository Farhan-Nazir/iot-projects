const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const Led = require("./simulators/Led/Led");
const Speedometer = require("./simulators/Speedometer/speedometer");
//let socket = require("socket.io-client")("http://localhost:5000");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
io.on("connection", socket => {
  console.log("New connection !!!");

  Led(socket);
  Speedometer(socket);
  //   socket.on("Incoming Led", data => {
  //     console.log(data);
  //     socket.broadcast.emit("Outgoing Led", data);
  //   });
  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => console.log("Client disconnected"));
});
server.listen(PORT, () => console.log("Connected @ " + PORT));
