import send from "koa-send";

function serve(path, root) {
    return async function(ctx, next) {
        try{
            let pathArr = ctx.path.slice(1).split("/");
            if(path == pathArr[0]) {
                return await send(ctx, pathArr.slice(1).join("/"), {root: root});
            }
        } catch(e) {
            ctx.status = 404;
        }

        return next();
    }
}

module.exports = serve;
