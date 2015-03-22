/**
 * Webserver request wrapper.
 */
export class Request {

  /**
   * Stores the original request object.
   */
  constructor(req) {
    this.req = req;
  }

  /**
   * Get request URL.
   *
   * @return {String}
   */
  get url() {
    return this.req.url;
  }

  /**
   * Set request URL.
   *
   * @param {String} val
   */
  set url(val) {
    this.req.url = val;
  }

  /**
   * Get request method.
   *
   * @return {String}
   */
  get method() {
    return this.req.method;
  }

  /**
   * Set request method.
   *
   * @param {String} val
   */
  set method(val) {
    this.req.method = val;
  }

  /**
   * Get response status message.
   *
   * @return {String}
   */
  get message() {
    return this.res.statusMessage || statuses[this.status];
  }

  /**
   * Set response status message.
   *
   * @param {String} msg
   */
  set message(msg) {
    this.res.statusMessage = msg;
  }

}
