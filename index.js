"use strict"

const send = require("koa-send");

module.exports = function serve(pathname, root) {
    let reg;

    if(typeof pathname === "string") {
        // format path for regexp
        if(pathname.charAt(0) != "/") pathname = "/" + pathname;
        if(pathname.charAt(pathname.length - 1) != "/") pathname += "/";
        reg = new Regexp("^" + pathname);
    } else if(typeof pathname.test === "function") {
        reg = pathname;
    } else {
        throw("pathname should be a string or regexp!");
    }

    return function(ctx, next) {
        if(ctx.method == "HEAD" || ctx.method == "GET") {
            // TODO: replace path and send
        }

        return next();
    }
};
