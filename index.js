const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);
    // You can handle incoming messages here
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

console.log("Signaling server is running on port 8080");
