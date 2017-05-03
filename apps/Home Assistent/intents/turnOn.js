/**
 * Author: fd
 * Description: 
 */

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

//Configure slots and utterances
var config = {
}

//Handle the Intent
var handler = function(req, res){
    res.say('Ok, habe das Licht angemacht!');
    res.shouldEndSession(false);
}

//Export Config and IntentHandler
module.exports.config = config;
module.exports.handler = handler;