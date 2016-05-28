var http = require('http');
var routers = require('./router.js');
var IP_ADDRESS = process.env.OPENSHIFT_NODEJS_IP;
var PORT = process.env.OPENSHIFT_NODEJS_PORT ||  3000;
var server = http.createServer(routers);

server.listen(PORT,IP_ADDRESS);