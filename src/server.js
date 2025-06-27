// npm install @hapi/hapi
const Hapi = require('@hapi/hapi');

// files
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();