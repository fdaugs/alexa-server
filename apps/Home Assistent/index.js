var alexa = require('alexa-app');
const fs = require('fs');
const path = require('path');
const dir = path.basename(__dirname);
const chalk = require('chalk');


// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define an alexa-app
var app = new alexa.app('HomeAssistent');
app.id = require('./package.json').alexa.applicationId;

app.launch(function (req, res) {
  res.say("Hallo! Was kann ich für dich tun?");
  res.shouldEndSession(false);
});

//Load intents from intent-directory
try {
  files = fs.readdirSync(__dirname + '/intents/');
  files.forEach(file => {
    var intent = require('./intents/' + file);
    let intentName = path.basename(file, '.js');
    app.intent(intentName, intent.config, intent.handler);
  });
} catch (error) {
  console.log(chalk.red('Couldn`t load any intent for the skill '+ dir + ' !'));
}

module.exports = app;