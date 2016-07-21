"use strict"

const send = require("koa-send");

module.exports = function serve(path, root) {
    // remove / begin
    path = path.replace(/^\/+/, "");

    return function(ctx, next) {
        if(ctx.method == "HEAD" || ctx.method == "GET") {

            let pathArr = ctx.path.slice(1).split("/");

            // match path
            if(path == pathArr[0]) {
                return send(ctx, pathArr.slice(1).join("/"), {root: root}).then(() => {
                    return next();
                });
            }
        }

        return next();
    }
};
