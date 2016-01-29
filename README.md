# Koa-static2

Middleware for Koa2 to serve a folder under a name declared by user with Babel

## Install

```
npm install koa-static2
```

## Usage

```js
import Koa from "koa";
import serve from "koa-static2";

const app = new Koa();

app.use(serve("static", "./assets"));
```
