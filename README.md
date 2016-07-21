# Koa-static2

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

Middleware for Koa2 to serve a folder under a name declared by user

## Install

```
npm install koa-static2
```

## Usage

```js
import Koa from "koa";
import serve from "koa-static2";

const app = new Koa();

app.use(serve("static", __dirname + "/assets"));
```
## License

MIT


[npm-image]: https://img.shields.io/npm/v/koa-static2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-static2
[downloads-image]: http://img.shields.io/npm/dm/koa-static2.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-static2
[travis-image]: https://img.shields.io/travis/Secbone/koa-static2.svg?style=flat-square
[travis-url]: https://travis-ci.org/Secbone/koa-static2
