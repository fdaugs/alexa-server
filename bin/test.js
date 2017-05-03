var ioreq = require("socket.io-request");
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on("connection", function (socket) {
    console.log("new client! " + socket.id);

    /*socket.on('intent',(req)=>{
        console.log(JSON.parse(req).data);
    })*/
    ioreq(socket,{event:"intent"}).response("toUpper", function (req, res) {
        console.log(req);
        res(req.toUpperCase());
    });

});

io.listen(4000);


/*var io = require("socket.io")(4000);

io.on("connection", function (socket) {
    console.log("new client! " + socket.id);

    ioreq(socket).response("toUpper", function (req, res) {
        console.log(req);
        res(req.toUpperCase());
    });

});*/