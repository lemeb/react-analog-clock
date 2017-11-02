/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const io = require('socket.io')();
const SERVERPORT = 3001;
const CLIENTPORT = 3000;

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

io.listen(SERVERPORT);
console.log('Server listening on port', SERVERPORT);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    disableHostCheck: true,
}).listen(CLIENTPORT, err => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:'+CLIENTPORT);
});
