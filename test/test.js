"use strict"

const assert = require("assert");
const serve = require("../dist/index.js").default;
const Koa = require("koa");
const request = require("supertest");

describe("Koa-static2", () => {
    const app = new Koa();
    app.use(serve("static", "./"));

    app.use(ctx => {
        ctx.body = "it's work!";
    });

    it("should work", done => {
        request(app.listen())
            .get("/")
            .expect(200, done)
    });
});
