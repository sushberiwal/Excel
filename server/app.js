const express = require("express");
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static("public"));


io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);
});
  

server.listen(4000 , ()=>{
    console.log("Server started at port 4000 !!!");
})