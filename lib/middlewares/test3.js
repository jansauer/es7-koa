export async function test3(next) {
  console.log('>> three');
  this.response.body = 'Hello World!';
  await next();
  console.log('<< three');
}
