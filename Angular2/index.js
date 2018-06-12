var express = require('express');
var app = express();
var server = require("http").Server(app);
var path = require("path");

app.use("/estil", express.static(__dirname + '/codi/arxiusEstil'))
app.use("/codi", express.static(__dirname + '/codi/arxiusCodi'))
app.use("/pagines", express.static(__dirname + '/pagines'))

server.listen(3000, function(){
    console.log("Servidor ha iniciat correctament ✔");
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pagines/index.html');
  });