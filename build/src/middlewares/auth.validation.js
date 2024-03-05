"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isAuth(err, req, res, next) {
    console.log('Authorized router');
    next();
}
exports.isAuth = isAuth;
