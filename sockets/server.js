var io;
var ioreq = require("socket.io-request");

module.exports = {
    start: function (server) {
        io = require('socket.io')(server);
        io.on('connection', function (client) {
            console.log(client.id);
            client.on('intent', function (data) {
                io.emit('intent', {
                    "intent": 'turnOn'
                });
            });
            /*ioreq(io).response("toUpper", function (req, res) {
                console.log(req);
                res(req.toUpperCase());
            });*/
        });
    },
    sendIntent: function (intent) {
        console.log('send')
        io.emit('intent', {
            "intent": intent
        });
    },
    onIntent: function (intent, callback) {
        io.on('intent', function (client, msg) {
            callback(msg);
        })
    },
    getIo: function () {
        return io;
    }
}