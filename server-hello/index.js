/**
 * Docs:
 *
 * @see https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_class_http_server
 * @see https://nodejs.org/dist/latest-v6.x/docs/api/net.html#net_class_net_server
 *
 *
 * Video:
 *
 * https://youtu.be/aHljHztKaQY?list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg
 */

/**
 * Import core module
 *
 * @see Modules API https://nodejs.org/dist/latest-v6.x/docs/api/modules.html#modules_modules
 *
 * @see http built-in source code https://github.com/nodejs/node/blob/v6.5.0/lib/_http_server.js
 */
const HTTP = require('http');


const server = new HTTP.Server();

server.listen(1337, '127.0.0.1');

server.on('request', (request, response) => {
    let content = 'Hello, World';

    response.end(content);
});