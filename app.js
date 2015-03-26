/**
 * Module dependencies.
 */
let http = require('http');
import {Dispatcher} from './lib/Dispatcher.js';
import {test1} from './lib/middlewares/test1.js';
import {test2} from './lib/middlewares/test2.js';
import {test3} from './lib/middlewares/test3.js';


/**
 * Configuration parameters.
 */
const port = process.env.PORT || 3000;

/**
 * Dispatcher wiring.
 */
let dispatcher = new Dispatcher()
  .use(test1)
  .use(test2)
  .use(test3);

/**
 * Start webserver.
 */
http.createServer(dispatcher.dispatch()).listen(port, function() {
  console.log('Your server is up and running on port ' + port);
});
