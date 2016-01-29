"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koaSend = require("koa-send");

var _koaSend2 = _interopRequireDefault(_koaSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function serve(path, root) {
    return function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
            var pathArr;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            pathArr = ctx.path.slice(1).split("/");

                            if (!(path == pathArr[0])) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 5;
                            return (0, _koaSend2.default)(ctx, pathArr.slice(1).join("/"), { root: root });

                        case 5:
                            return _context.abrupt("return", _context.sent);

                        case 6:
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);

                            ctx.status = 404;

                        case 11:
                            return _context.abrupt("return", next());

                        case 12:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 8]]);
        }));

        return function (_x, _x2) {
            return ref.apply(this, arguments);
        };
    }();
}

exports.default = serve;