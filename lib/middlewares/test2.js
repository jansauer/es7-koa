import {stub} from './stub.js';

export async function test2(next) {
  console.log('>> two');
  try {
    var test = await stub();
    console.log('Async test: ' + test);
  } catch (err) {
    console.log('Async test: ' + err);
  }
  await next();
  console.log('<< two');
}
