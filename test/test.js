"use strict"

import assert from "assert";
import serve from "../index.js";
import Koa from "koa";
import request from "supertest";

describe("Koa-static2", () => {
    const app = new Koa();
    app.use(serve("/static", __dirname));

    it("should work", done => {
        request(app.listen())
            .get("/static/some.txt")
            .expect(200, "text content\n", done)
    });

    it("should work when serve the root path", done => {
        const app = new Koa();
        app.use(serve("/", __dirname));
        app.use(function(ctx, next) {
            if(ctx.path == "/"){
                ctx.body = "ok";
            }
        });

        request(app.listen())
            .get("/")
            .expect(200, "ok", done)
    });

    it("should work when serve the root path and get correct content", done => {
        const app = new Koa();
        app.use(serve("/", __dirname));

        request(app.listen())
            .get("/some.txt")
            .expect(200, "text content\n", done)
    });
});
