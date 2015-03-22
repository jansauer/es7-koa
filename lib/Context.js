/**
 * Module dependencies.
 */
import {Request} from './Request.js';
import {Response} from './Response.js';

/**
 * Execution context for dispatch calls.
 */
export class Context {

  /**
   * Populates the context on initialization.
   */
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.request = new Request(req);
    this.response = new Response(res);
  }

}
