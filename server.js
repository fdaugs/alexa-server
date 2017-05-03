const LOCAL = false;

const socket = require('./sockets/server');

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.0'
const debug = process.env.DEBUG || true;

if (LOCAL) {
  require('alexa-home-server').start({
    server_root: __dirname,
    port: 4000,
    subdomain: 'home'
  });
} else {
  const AppServer = require('alexa-app-server');
  const server = new AppServer({
    server_root: __dirname,
    port: port,
    debug: debug,
    host: ip
  });
  socket.start(server.start());
  io = socket.getIo();
  io.on('intent',()=>{
    console.log('aefaef');
  })
}