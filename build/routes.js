"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandler = void 0;
const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.end('Hello there');
    }
    else if (req.url === '/users') {
        res.end('some html here');
    }
};
exports.requestHandler = requestHandler;
