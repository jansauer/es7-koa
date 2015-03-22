export async function test1(next) {
  console.log('>> one');
  var start = new Date;
  await next();
  var ms = new Date - start;
  console.log('%s %s - %sms', this.request.method, this.request.url, ms);
  console.log('<< one');
}
