const hapi = require('hapi');
const Routes = require('./Routes');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});


server.route(Routes);

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server started at:', server.info.uri);
  });
}

module.exports = server;
