let WebSocket = require("ws");

let instance = new WebSocket.Server({
  host: "192.168.60.191",

  port: 3000,
});

instance.on("connection", (client) => {
  client.on("message", (data) => {
    console.log("data", data);
    client.send(data);
  });
});
