/**
 * Module dependencies.
 */
import {Context} from './Context.js';

/**
 * Async middleware flow manager.
 */
export class Dispatcher {

  /**
   * Populates the middleware stack on
   * initialization.
   */
  constructor() {
    this.middleware = [this.impasse];
  }

  /**
   * Use the given middleware `fn`.
   *
   * @param {AsyncFunction} fn
   * @return {Application} self
   */
  use(fn) {
    // Add fn as penultimate element so this.impasse remains last
    this.middleware[this.middleware.length-1] = fn;
    this.middleware.push(this.impasse);
    return this;
  }

  /**
   * Return a request handler for the
   * native http server.
   *
   * @return {Function}
   */
  dispatch() {
    var stack = this.middleware;

    return async function(req, res) {
      let pos = 0;
      let ctx = new Context(req, res);

      let next = async function() {
        await stack[++pos].call(ctx, next);
      }

      // todo: catch exceptions
      await stack[pos].call(ctx, next);

      // todo: needs do be more sophisticated
      res.end(ctx.response.body);

    }
  }

  /**
   * Final non next'ing middleware to
   * downstream the middleware stack.
   */
  async impasse() {
    console.log('== impasse');
    if (this.response.body == undefined) {
      this.response.status(404);
      this.response.body = this.response.message;
    }
  }

}
