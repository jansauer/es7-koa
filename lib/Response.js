/**
 * Module dependencies.
 */
var statuses = require('statuses');

/**
 * Webserver response wrapper.
 */
export class Response {

  /**
   * Stores the original response object.
   */
  constructor(res) {
    this.res = res;
  }

  /**
   * Get response status code.
   *
   * @return {Number}
   */
  get status() {
    return this.res.statusCode;
  }

  /**
   * Set response status code.
   *
   * @param {Number} code
   */
  set status(code) {
    this.res.statusCode = code;
    this.res.statusMessage = statuses[code];
    if (this.body && statuses.empty[code]) this.body = null;
  }

  /**
   * Get response body.
   *
   * @return {Mixed}
   */
  get body() {
    return this._body;
  }

  /**
   * Set response body.
   *
   * @param {String} val
   */
  set body(val) {
    this._body = val;
  }

}
