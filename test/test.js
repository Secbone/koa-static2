"use strict"

import assert from "assert";
import serve from "../dist/index.js";
import Koa from "koa";
import request from "supertest";

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
