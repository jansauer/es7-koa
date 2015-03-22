# ECMAScript 7 Koa

My personal proof of concept rewrite of [Koa](https://github.com/koajs/koa)
using [async functions for ECMAScript](https://github.com/lukehoban/ecmascript-asyncawait)
. It has the same middleware flow as Koa, allowing you to perform actions
downstream, then filter and manipulate the response upstream. Unlike Koa it uses
*await* and *async functions* instead of *generators* and makes use of
*ES6 classes* and *ES6 Modules*. To use these features today the code is loaded
with [Babel](http://babeljs.io).


# Example

```
import {Dispatcher} from './lib/Dispatcher.js';
let app = new Dispatcher()

// logger
app.use(async function (next){
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', this.request.method, this.request.url, ms);
});

// response
app.use(async function (){
  this.response.body = 'Hello World!';
});

require('http').createServer(app.dispatch()).listen(3000);
```

## Contributing

Pull requests are always welcome. I'm grateful for any help or inspiration.

## License and Authors

Author: Jan Sauer
<[jan@jansauer.de](mailto:jan@jansauer.de)>
([https://jansauer.de](https://jansauer.de))

```text
Copyright 2013-2014, Jan Sauer <jan@jansauer.de> (https://jansauer.de)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
