const express = require("express");
const error = require("./middlewares/error");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
var clients = {};
//configurações
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/chat/index.html");
});

io.on("connection", function (socket) {
  socket.on("send-client", function (msg) {
    if (msg != "") {
      io.emit("send-client", msg);
    }
  });
});

app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function () {
  console.log("Chat funcionando na porta 3000.");
});
