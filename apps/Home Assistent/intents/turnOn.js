/**
 * Author: fd
 * Description: 
 */

// Allow this module to be reloaded by hotswap when changed
//const socket = require('../../../sockets/server');
module.change_code = 1;

//Configure slots and utterances
var config = {
}

//Handle the Intent
var handler = function(req, res){
    //socket.sendIntent('turnOn');
    res.say('<say-as interpret-as="interjection">klar</say-as>');
    res.shouldEndSession(false);
    res.send();
}


//Export Config and IntentHandler
module.exports.config = config;
module.exports.handler = handler;