"use strict"

import assert from "assert";
import serve from "../index.js";
import Koa from "koa";
import request from "supertest";

describe("Koa-static2", () => {
    const app = new Koa();
    app.use(serve("static", __dirname));

    it("should work", done => {
        request(app.listen())
            .get("/static/some.txt")
            .expect(200, "text content\n", done)
    });
});
